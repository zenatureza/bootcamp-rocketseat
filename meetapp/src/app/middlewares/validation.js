import * as Yup from 'yup';
import autoBind from 'auto-bind';

class Validation {
  constructor() {
    this.variableToString = obj => Object.keys(obj)[0];
    autoBind(this);
  }

  async validateUserSession(req, res, next) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    const { email, password } = req.body;
    const items = [
      { key: this.variableToString({ email }), value: email },
      { key: this.variableToString({ password }), value: password },
    ];

    const promises = items.map(async item =>
      Yup.reach(schema, item.key)
        .validate(item.value)
        .catch(err => {
          throw res.status(400).json({
            error: `$ ${item.key} - ${err.message}`,
          });
        })
    );

    await Promise.all(promises);

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
    const items = [
      { key: this.variableToString({ name }), value: name },
      { key: this.variableToString({ email }), value: email },
      { key: this.variableToString({ password }), value: password },
    ];

    const promises = items.map(async item =>
      Yup.reach(schema, item.key)
        .validate(item.value)
        .catch(err => {
          throw res.status(400).json({
            error: `$ ${item.key} - ${err.message}`,
          });
        })
    );

    await Promise.all(promises);

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
    const items = [
      { key: this.variableToString({ name }), value: name },
      { key: this.variableToString({ email }), value: email },
      { key: this.variableToString({ oldPassword }), value: oldPassword },
      {
        key: this.variableToString({ confirmPassword }),
        value: confirmPassword,
      },
      { key: this.variableToString({ password }), value: password },
    ];

    const promises = items.map(async item =>
      Yup.reach(schema, item.key)
        .validate(item.value)
        .catch(err => {
          throw res.status(400).json({
            error: `$ ${item.key} - ${err.message}`,
          });
        })
    );

    await Promise.all(promises);

    req.name = name;
    req.email = email;
    req.oldPassword = oldPassword;
    req.password = password;
    req.confirmPassword = confirmPassword;

    return next();
  }

  async validateMeetup(req, res, next) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .min(6)
        .required(),
      description: Yup.string()
        .min(10)
        .required(),
      address: Yup.string()
        .min(10)
        .required(),
      date: Yup.date().required(),
      banner_id: Yup.number()
        .integer()
        .required(),
    });

    const { title, description, address, date, banner_id } = req.body;

    const items = [
      { key: this.variableToString({ title }), value: title },
      { key: this.variableToString({ description }), value: description },
      { key: this.variableToString({ address }), value: address },
      { key: this.variableToString({ date }), value: date },
      { key: this.variableToString({ banner_id }), value: banner_id },
    ];

    const promises = items.map(async item =>
      Yup.reach(schema, item.key)
        .validate(item.value)
        .catch(err => {
          throw res.status(400).json({
            error: `$ ${item.key} - ${err.message}`,
          });
        })
    );

    await Promise.all(promises);

    req.title = title;
    req.description = description;
    req.address = address;
    req.date = date;
    req.banner_id = banner_id;

    return next();
  }
}

export default new Validation();
