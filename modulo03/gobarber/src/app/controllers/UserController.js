import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.email } });
    if (userExists) {
      return res.status(400).json({ error: '$ this user already exists!' });
    }

    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    const { email, oldPassword } = req;

    const user = await User.findByPk(req.userId);
    if (email && email !== user.email) {
      const userExists = await user.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: '$ user already exists!' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: '$ old password does not match!' });
    }

    // const { id, name, provider } = await user.update(req.body);
    await user.update(req.body);

    const { id, name, avatar } = await user.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }
}

export default new UserController();
