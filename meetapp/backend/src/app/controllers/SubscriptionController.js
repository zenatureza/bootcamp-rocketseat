import { Op } from 'sequelize';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  // GET: /subscriptions
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: { user_id: req.userId },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          where: {
            date: { [Op.gt]: new Date() },
          },
          required: true,
          attributes: ['id', 'title', 'description', 'address', 'date'],
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
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  // POST: /meetups/:meetupId/subscriptions/
  async store(req, res) {
    const user_id = req.userId;
    const meetup_id = req.params.meetupId;

    const meetup = await Meetup.findByPk(meetup_id, {
      include: [{ model: User, as: 'user' }],
    });
    if (!meetup) {
      return res.status(400).json({
        error: '$ meetup does not exists!',
        user_message: 'O meetup não existe!',
      });
    }

    if (meetup.user_id === user_id) {
      return res.status(400).json({
        error: '$ you cannot subscribe to your own meetups!',
        user_message: 'Você não pode se inscrever nos meetups que organiza!',
      });
    }

    if (meetup.alreadyHappened) {
      return res.json(400).json({
        error: '$ this meetup already happened!',
        user_message: 'Este meetup já aconteceu!',
      });
    }

    const userSubscription = await Subscription.findOne({
      where: { meetup_id, user_id },
    });
    if (userSubscription) {
      return res.status(400).json({
        error: '$ youre already subscribed to this meetup!',
        user_message: 'Você já está inscrito neste meetup!',
      });
    }

    const subscribedSameTimeMeetup = await Subscription.findOne({
      where: { user_id },
      include: [
        {
          model: Meetup,
          required: true,
          where: { date: meetup.date },
        },
      ],
    });
    if (subscribedSameTimeMeetup) {
      return res.status(400).json({
        error:
          '$ cannot subscribe to two meetups that happen at the same time!',
        user_message:
          'Você não pode se inscrever em dois meetups que acontecem ao mesmo tempo!',
      });
    }

    const subscription = Subscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
    });

    const user = await User.findByPk(user_id);
    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }

  // DELETE: /meetups/:subscriptionId/subscriptions/
  async delete(req, res) {
    // const user_id = req.userId;
    const { subscriptionId } = req.params;

    // const subscription = await Subscription.findOne({
    //   where: { user_id, meetup_id },
    // });
    const subscription = await Subscription.findByPk(subscriptionId);

    if (!subscription) {
      return res.status(400).json({
        error: '$ subscription not found!',
        user_message: 'Inscrição não encontrada!',
      });
    }

    subscription.destroy();
    return res.json({ msg: '> subscription undone!' });
  }
}

export default new SubscriptionController();
