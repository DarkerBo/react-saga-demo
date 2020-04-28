import { put, delay, takeLatest } from 'redux-saga/effects';
import { incrementCount, decrementCount, incrementAssignCount } from './actions';
import { CountActionConstants, incrementAssignCountAsyncType } from './types';

/**
 * @description 异步增加计数 saga
 */
function* incrementCountAsync() {
  yield delay(1000);
  yield put(incrementCount());
}

/**
 * @description 异步减少计数 saga
 */
function* decrementCountAsync() {
  yield delay(1000);
  yield put(decrementCount());
}

/**
 * @description 异步增加给定计数 saga
 */
function* incrementAssignCountAsync(action: incrementAssignCountAsyncType) {
  yield delay(1000);
  yield put(incrementAssignCount(action.count));
}

export default function*() {
  yield takeLatest(CountActionConstants.INCREMENT_COUNT_ASYNC, incrementCountAsync);
  yield takeLatest(CountActionConstants.DECREMENT_COUNT_ASYNC, decrementCountAsync);
  yield takeLatest(CountActionConstants.INCREMENT_ASSIGN_COUNT_ASYNC, incrementAssignCountAsync);
}
