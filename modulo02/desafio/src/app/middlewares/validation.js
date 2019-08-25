import * as Yup from 'yup';

const errors = {
  email: '$ invalid email!',
  password: '$ invalid password!',
  requiredName: '$ name is required!',
};

class Validation {
  constructor() {
    this.validateUserLogin = this.validateUserLogin.bind(this);
    this.validateUserSession = this.validateUserSession.bind(this);
    this.validateItem = this.validateItem.bind(this);
  }

  async validateUserSession(req, res, next) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    const { email, password } = req.body;

    try {
      await Yup.reach(schema, 'email').validate(email);
    } catch (err) {
      return res.status(400).json({ error: errors.email });
    }

    try {
      await Yup.reach(schema, 'password').validate(password);
    } catch (err) {
      return res.status(400).json({ error: errors.password });
    }

    req.email = email;
    req.password = password;

    return next();
  }

  async validateUserLogin(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(6)
        .required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    const { name, email, password } = req.body;

    await this.validateItem(schema, name, 'name', res);
    await this.validateItem(schema, email, 'email', res);
    await this.validateItem(schema, password, 'password', res);

    return res.json('teste');
  }

  async validateItem(schema, item, itemName, res) {
    try {
      await Yup.reach(schema, itemName).validate(item);
    } catch (err) {
      return res.status(400).json({ error: `$ ${itemName}: ${err.message}` });
    }

    return true;
  }
}

export default new Validation();
