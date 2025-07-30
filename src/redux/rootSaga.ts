import { all } from 'redux-saga/effects';
import cartSaga from '@/features/cart/cartSaga';
import authSaga from '@/features/auth/authSaga';

// Placeholder for now
export default function* rootSaga() {
  yield all([cartSaga(), authSaga()]);
}
