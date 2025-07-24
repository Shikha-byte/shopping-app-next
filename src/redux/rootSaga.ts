import { all } from 'redux-saga/effects';
import cartSaga from '@/features/cart/cartSaga';

// Placeholder for now
export default function* rootSaga() {
  yield all([cartSaga()]);
}
