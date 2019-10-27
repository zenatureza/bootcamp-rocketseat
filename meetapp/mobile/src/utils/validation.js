import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string().notRequired(),
  password: Yup.string()
    .notRequired()
    .when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .required()
            .min(6, 'A nova senha precisa ter pelo menos 6 digitos!')
        : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required('Preencha a confirmação de senha!') : field
  ),
});
