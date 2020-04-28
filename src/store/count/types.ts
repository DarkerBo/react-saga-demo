import { incrementCount, decrementCount, incrementAssignCount } from './actions';

/**
 * Action Constants
 */
export enum CountActionConstants {
  /** 增加计数 */
  INCREMENT_COUNT = 'INCREMENT_COUNT',
  /** 减少计数 */
  DECREMENT_COUNT = 'DECREMENT_COUNT',
  /** 增加给定计数 */
  INCREMENT_ASSGIN_COUNT = 'INCREMENT_ASSGIN_COUNT',
  /** 异步增加计数 */
  INCREMENT_COUNT_ASYNC = 'INCREMENT_COUNT_ASYNC',
  /** 异步减少计数 */
  DECREMENT_COUNT_ASYNC = 'DECREMENT_COUNT_ASYNC',
  /** 异步增加给定计数 */
  INCREMENT_ASSIGN_COUNT_ASYNC = 'INCREMENT_ASSIGN_COUNT_ASYNC'
}

/**
 * Action Types
 */
export type incrementCountType = ReturnType<typeof incrementCount>;
export type decrementCountType = ReturnType<typeof decrementCount>;
export type incrementAssignCountType = ReturnType<typeof incrementAssignCount>;

export type CountActionTypes = incrementCountType | decrementCountType | incrementAssignCountType;

/**
 * Saga Action Types
 */
export type incrementAssignCountAsyncType = Readonly<{
  type: CountActionConstants.INCREMENT_ASSIGN_COUNT_ASYNC;
  count: number;
}>;

/**
 * Reducer State
 */
export interface CountState {
  readonly count: number;
}
