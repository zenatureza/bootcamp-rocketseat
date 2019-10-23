import { Op } from 'sequelize';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  // GET: /subscriptions
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          where: {
            date: { [Op.gt]: new Date() },
          },
          required: true,
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
      return res.status(400).json({ error: '$ meetup does not exists!' });
    }

    if (meetup.user_id === user_id) {
      return res
        .status(400)
        .json({ error: '$ you cannot subscribe to your own meetups!' });
    }

    if (meetup.alreadyHappened) {
      return res.json(400).json({ error: '$ this meetup already happened!' });
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
      });
    }

    const userSubscription = await Subscription.findOne({
      where: { meetup_id, user_id },
    });
    if (userSubscription) {
      return res
        .status(400)
        .json({ error: '$ youre already subscribed to this meetup!' });
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
}

export default new SubscriptionController();