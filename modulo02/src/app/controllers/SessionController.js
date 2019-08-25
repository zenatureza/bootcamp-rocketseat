import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    // validation
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation failed!' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      // has no permission to continue
      return res.status(401).json({ error: 'user not found!' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password doest not match!' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
