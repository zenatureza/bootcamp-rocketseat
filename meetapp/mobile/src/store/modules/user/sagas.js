import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    console.tron.log('&&&& newprofile');
    console.tron.log(profile);

    const response = yield call(api.put, 'users', profile);

    Alert.alert(response.data.user_message);

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(error.response.data.user_message);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
