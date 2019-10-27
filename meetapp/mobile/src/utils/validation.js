import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string().min(
    6,
    'A senha atual precisa ter pelo menos 6 digitos!'
  ),
  password: Yup.string()
    .min(6, 'A nova senha precisa ter pelo menos 6 digitos!')
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required('Preencha a confirmação de senha!') : field
  ),
});
