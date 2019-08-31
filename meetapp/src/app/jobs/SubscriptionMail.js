import Mail from '../../lib/Mail';

class SubscriptionMail {
  // using get propertyName, we can access it like: subscriptionMail.property
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    console.log('executando a fila!');

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: `Nova inscrição no meetup: ${meetup.title}!`,
      template: 'subscription',
      context: {
        organizer: meetup.user.name,
        meetup: meetup.title,
        user: user.name,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionMail();
