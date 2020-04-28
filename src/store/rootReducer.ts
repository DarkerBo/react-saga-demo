import { combineReducers } from 'redux';
import countReducer from './count/reducer';
// import otherModuleReducer from './otherModule/reducer';

export const rootReducer = combineReducers({
  count: countReducer
  // otherModule: otherModuleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
