import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

// import { updateProfileSuce }
export function* updateProfile({ payload }) {
  console.tron.log(payload);
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
