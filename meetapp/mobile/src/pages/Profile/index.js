import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import { profileSchema } from '~/utils/validation';

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

  async function handleSubmit() {
    try {
      console.tron.log('validating profile schema');

      const reqBody = {
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      };

      console.tron.log(reqBody);

      const validateResult = await profileSchema.validate(reqBody, {
        abortEarly: false,
      });
      console.tron.log('validate result');
      console.tron.log(validateResult);

      if (password && confirmPassword && !oldPassword) {
        Alert.alert(
          'Atenção',
          'Gostaria de alterar a senha? Para isso é necessário informar a senha atual. Caso contrário, apenas seu nome e email serão atualizados!',
          [
            {
              text: 'Não',
              onPress: () => {
                dispatch(updateProfileRequest(reqBody));
              },
            },
            {
              text: 'Sim',
              onPress: () => {
                console.tron.log('waiting current password');
              },
            },
          ]
        );
      } else {
        dispatch(updateProfileRequest(reqBody));
      }
    } catch ({ path, message }) {
      console.tron.log('validation error');
      console.tron.log(path);
      console.tron.log(message);
      Alert.alert(message);
    }
  }

  function handleLogout() {
    Alert.alert('Atenção', 'Tem certeza que quer sair do aplicativo?', [
      {
        text: 'Não',
        onPress: () => {
          console.tron.log('waiting current password');
        },
      },
      {
        text: 'Sim',
        onPress: () => {
          dispatch(signOut());
        },
      },
    ]);
  }

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <FormInput
            // icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            // icon="mail-outline"
            ref={emailRef}
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
            // icon="lock-outline"
            ref={oldPasswordRef}
            secureTextEntry
            placeholder="Senha atual"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            // icon="lock-outline"
            ref={passwordRef}
            secureTextEntry
            placeholder="Nova senha"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            // icon="lock-outline"
            ref={confirmPasswordRef}
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
