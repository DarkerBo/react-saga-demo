import { fork } from 'redux-saga/effects';
import countSaga from './count/sagas';
// import otherModuleSaga from './otherModule/sagas';

export const rootSaga = function*() {
  yield fork(countSaga);
  // yield fork(otherModuleSaga)
};
