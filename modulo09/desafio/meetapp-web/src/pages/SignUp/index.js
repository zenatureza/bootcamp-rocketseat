import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { signUpSchema } from '~/utils/validation';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
    console.tron.log('$ handling submit...');
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={signUpSchema} onSubmit={handleSubmit}>
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
