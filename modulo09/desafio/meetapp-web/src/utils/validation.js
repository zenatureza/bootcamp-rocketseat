import * as Yup from 'yup';

export const meetupSchema = Yup.object().shape({
  banner_id: Yup.mixed().required('Insira um banner para o meetup!'),
  title: Yup.string().required('Insira um título para o meetup!'),
  description: Yup.string().required('Insira uma descrição para o meetup!'),
  date: Yup.date().required('Insira quando ocorrerá o meetup!'),
  address: Yup.string().min(10).required('Insira o local onde ocorrerá o meetup!'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatório!'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string()
    .required('A senha é obrigatório!')
    .min(6, 'A senha deve possuir no mínimo 6 caracteres!'),
});
