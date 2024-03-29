import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  // POST: /sessions
  async store(req, res) {
    const { email, password } = req;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: '$ user not found!' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: '$ password does not match!' });
    }

    const { id, name } = user;
    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
