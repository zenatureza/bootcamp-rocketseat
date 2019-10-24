import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log('$ signIn: ', payload);

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login!',
        'O usuário não pode ser um prestador de serviço!'
      );
      return;
    }

    // always provides authorization inside header requests
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação!', 'Verifique seus dados de login!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: false,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert('Falha no cadastro!', 'Verifique seus dados!');

    yield put(signFailure());
  }
}

// setting authoeization header not only after login
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    console.tron.log(`setando token ${token}`);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

// also listening to persist/REHYDRATE action (contains persisted data)
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
