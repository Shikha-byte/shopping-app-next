// src/features/auth/authSaga.ts
import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginRequest, loginSuccess, loginFailure,
  registerRequest, registerSuccess, registerFailure
} from './authSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(action: PayloadAction<{ email: string; password: string }>): any {
  try {
    //const response = yield call(axios.post, '/api/auth/login', action.payload);
    const response = yield call(axios.post, 'http://localhost:5000/api/auth/login', action.payload);
    const { token } = response.data;
    const user = { name: action.payload.email, email: action.payload.email }; // You can update this later
    yield put(loginSuccess({ token, user }));
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

function* handleRegister(action: PayloadAction<{ name: string; email: string; password: string }>): any {
  try {
    //yield call(axios.post, '/api/auth/register', action.payload);
    yield call(axios.post, 'http://localhost:5000/api/auth/register', action.payload);
    console.log("called")
    yield put(registerSuccess());
  } catch (error: any) {
    yield put(registerFailure(error.response?.data?.message || 'Registration failed'));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(loginRequest.type, handleLogin),
    takeLatest(registerRequest.type, handleRegister),
  ]);
}
