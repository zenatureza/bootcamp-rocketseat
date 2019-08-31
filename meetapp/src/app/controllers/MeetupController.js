import { isBefore, parseISO, startOfHour } from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const meetups = await Meetup.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['title', 'user_id', 'address', 'date'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const { userId, title, description, address, date } = req;

    const hourStart = startOfHour(parseISO(date));
    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: '$ cannot create meetups in the past!' });
    }

    const meetup = await Meetup.create({
      user_id: userId,
      title,
      description,
      address,
      date,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const meetup_id = req.params.id;

    const meetup = await Meetup.findByPk(meetup_id);
    if (!meetup) {
      return res.status(400).json({ error: '$ meetup doest not exists!' });
    }

    const user_id = req.userId;
    if (meetup.user_id !== user_id) {
      return res
        .status(400)
        .json({ error: '$ user is not the meetup organizer!' });
    }

    const { title, description, address, date } = await meetup.update(req.body);

    return res.json({ title, description, address, date });
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup.user_id !== req.userId) {
      return res
        .status(400)
        .json({ error: '$ you dont have permission to cancel this meetup!' });
    }

    // checks if the meetup didnt happened yet
    const hourStart = startOfHour(parseISO(meetup.date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: '$ this meetup already happened!' });
    }

    meetup.destroy();
    return res.json({ msg: '> meetup was deleted from the database!' });
  }
}

export default new MeetupController();
