import User from '../models/User';

class UserController {
  // GET: /users
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.email } });
    if (userExists) {
      return res.status(400).json({
        error: '$ this user already exists!',
        user_message: 'O usuário já existe!',
      });
    }

    const user = await User.create(req.body);
    return res.json(user);
  }

  // PUT: /users (logged user)
  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);
    if (email && email !== user.email) {
      const userExists = await user.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({
          error: '$ user already exists!',
          user_message: 'Usuário já existe',
        });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({
        error: '$ old password does not match!',
        user_message: 'A senha antiga não está correta!',
      });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
