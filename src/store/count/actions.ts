import { CountActionConstants } from './types';

/**
 * @description 增加计数 action
 */
export const incrementCount = () => ({ type: CountActionConstants.INCREMENT_COUNT } as const);

/**
 * @description 减少计数 action
 */
export const decrementCount = () => ({ type: CountActionConstants.DECREMENT_COUNT } as const);

/**
 * @description 增加给定计数 action
 */
export const incrementAssignCount = (count: number) =>
  ({
    type: CountActionConstants.INCREMENT_ASSGIN_COUNT,
    payload: { count }
  } as const);
