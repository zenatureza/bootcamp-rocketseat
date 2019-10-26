import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/Header';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // executes when profile is updated
  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            ref={emailRef}
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            ref={oldPasswordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha atual"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Nova senha"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            ref={confirmPasswordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Salvar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do Meetapp</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
