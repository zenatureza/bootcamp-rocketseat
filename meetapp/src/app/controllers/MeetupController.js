import {
  isBefore,
  parseISO,
  startOfHour,
  startOfDay,
  endOfDay,
} from 'date-fns';

import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  // GET: /meetups/id(optional)/?date=2019-07-01&page=2
  async index(req, res) {
    const { id } = req.params;
    if (id) {
      const { userId } = req;

      // get meetup data
      const meetup = await Meetup.findByPk(id, {
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['id', 'path', 'url'],
          },
        ],
        attributes: [
          'id',
          'title',
          'date',
          'address',
          'description',
          'user_id',
          'banner_id',
        ],
      });

      if (meetup.user_id !== userId) {
        return res
          .status(401)
          .json('$ meetup data only available for organizers!');
      }

      return res.json(meetup);
    }

    const { page = 1 } = req.query;
    const { date } = req.query;
    const where = date
      ? {
        date: {
          [Op.between]: [startOfDay(date, endOfDay(date))],
        },
      }
      : {};

    const meetups = await Meetup.findAll({
      where,
      order: ['date'],
      limit: 10,
      offset: page * 10 - 10,
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

  // POST: /meetups
  async store(req, res) {
    const { userId, title, description, address, date, banner_id } = req;

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
      banner_id,
    });

    return res.json(meetup);
  }

  // PUT: /meetups/:id
  async update(req, res) {
    const meetup_id = req.params.id;

    const meetup = await Meetup.findByPk(meetup_id);
    if (!meetup) {
      return res.status(400).json({ error: '$ meetup doest not exists!' });
    }

    // checks if the meetup didnt happened yet
    if (meetup.alreadyHappened) {
      return res.status(400).json({ error: '$ this meetup already happened!' });
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

  // DELETE: /meetups/:id
  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup.user_id !== req.userId) {
      return res
        .status(400)
        .json({ error: '$ you dont have permission to cancel this meetup!' });
    }

    // checks if the meetup didnt happened yet
    if (meetup.alreadyHappened) {
      return res.status(400).json({ error: '$ this meetup already happened!' });
    }

    meetup.destroy();
    return res.json({ msg: '> meetup was deleted from the database!' });
  }
}

export default new MeetupController();
