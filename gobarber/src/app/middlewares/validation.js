import * as Yup from 'yup';

class Validation {
  constructor() {
    this.validateItem = this.validateItem.bind(this);

    this.validateUserLogin = this.validateUserLogin.bind(this);
    this.validateUserSession = this.validateUserSession.bind(this);
    this.validateAppointment = this.validateAppointment.bind(this);
  }

  async validateItem(schema, item, itemName, res) {
    try {
      await Yup.reach(schema, itemName).validate(item);
    } catch (err) {
      return res.status(400).json({ error: `$ ${itemName}: ${err.message}` });
    }

    return true;
  }

  async validateUserSession(req, res, next) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    const { email, password } = req.body;

    await this.validateItem(schema, email, 'email', res);
    await this.validateItem(schema, password, 'password', res);

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

    req.name = name;
    req.email = email;
    req.password = password;

    try {
      return next();
    } catch (err) {
      return res.json('$ problem calling next function!');
    }
  }

  async validateUserUpdate(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    const { name, email, oldPassword, password, confirmPassword } = req.body;

    await this.validateItem(schema, name, 'name', res);
    await this.validateItem(schema, email, 'email', res);
    await this.validateItem(schema, oldPassword, 'oldPassword', res);
    await this.validateItem(schema, password, 'password', res);
    await this.validateItem(schema, confirmPassword, 'confirmPassword', res);

    req.name = name;
    req.email = email;
    req.oldPassword = oldPassword;
    req.password = password;
    req.confirmPassword = confirmPassword;

    return next();
  }

  async validateAppointment(req, res, next) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    const { provider_id, date } = req.body;

    await this.validateItem(schema, provider_id, 'provider_id', res);
    await this.validateItem(schema, date, 'date', res);

    req.provider_id = provider_id;
    req.date = date;

    return next();
  }
}

export default new Validation();
