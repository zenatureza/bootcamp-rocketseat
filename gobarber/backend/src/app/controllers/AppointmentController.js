import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Appointment from '../models/Appointment';
import Notification from '../schemas/Notification';
import User from '../models/User';
import File from '../models/File';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'date', 'past', 'cancelable'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const { provider_id, date } = req;

    /**
     * Check if provider_id is a provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      // unauthorized
      return res
        .status(401)
        .json({ error: '$ provider is needed for appointment creation!' });
    }

    // business logic

    /**
     * Check if provider is trying to create an appointment with itself
     */
    if (provider_id === req.userId) {
      return res.status(400).json({
        error: '$ provider cannot set an appointment with himself/herself',
      });
    }

    const hourStart = startOfHour(parseISO(date));

    /**
     * Appointments need to be done in the future
     */
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: '$ past dates are not permited!' });
    }

    /**
     * Check if provider does not have any appointment at the same time
     */
    const providerAlreadyHaveAnAppointment = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    });

    if (providerAlreadyHaveAnAppointment) {
      return res
        .status(400)
        .json({ error: '$ appointment date is not available!' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    /**
     * Notify appointment provider
     */
    const user = await User.findByPk(req.userId);
    const formattedDate = format(hourStart, "'dia' dd 'de' MMM', às' H:mm'h'", {
      locale: pt,
    });

    await Notification.create({
      content: `Novo agendamento de ${user.name} para o ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (appointment.user_id !== req.userId) {
      return res.status(400).json({
        error: '$ you dont have permission to cancel this appointment!',
      });
    }

    // hour - 2h (can only cancel appointment 2h before)
    const dateWithSub = subHours(appointment.date, 2);

    // check cancel time is in the past
    if (isBefore(dateWithSub, new Date())) {
      return res
        .status(401)
        .json('$ you can only cancel appointment 2h in advance!');
    }

    appointment.canceled_at = new Date();
    await appointment.save();

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
