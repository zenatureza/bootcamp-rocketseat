import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    console.tron.log('>>>> payload.data: ');
    console.tron.log(payload.data);

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };
    console.tron.log('profile: ');
    console.tron.log(profile);

    const response = yield call(api.put, 'users', profile);
    console.tron.log('####### api response:');
    console.tron.log(response);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro!', 'Falha na atulização dos dados de perfil!');
    console.tron.log(err);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
