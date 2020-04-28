import { CountActionTypes, CountActionConstants, CountState } from './types';

const initialCountState: CountState = {
  count: 0
};

export default (state = initialCountState, action: CountActionTypes): CountState => {
  switch (action.type) {
    case CountActionConstants.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case CountActionConstants.DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case CountActionConstants.INCREMENT_ASSGIN_COUNT:
      return { ...state, count: state.count + action.payload.count };
    default:
      return state;
  }
};
