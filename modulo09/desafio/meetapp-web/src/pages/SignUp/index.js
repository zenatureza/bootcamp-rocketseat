import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string()
    .required('A senha é obrigatório!')
    .min(6, 'A senha deve possuir no mínimo 6 caracteres'),
});

export default function SignUp() {
  // const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    // dispatch(signUpRequest(name, email, password));
    console.tron.log('$ handling submit...');
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
