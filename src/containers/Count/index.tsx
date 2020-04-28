import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useTitle from 'src/hooks/useTitle';
import { RootState } from 'src/store/rootReducer';
import {
  CountState,
  CountActionConstants,
  incrementAssignCountAsyncType
} from 'src/store/count/types';
import { incrementCount, decrementCount, incrementAssignCount } from 'src/store/count/actions';
import { CountWrap } from './style';

const Count = () => {
  useTitle('Count Page');

  const { count } = useSelector<RootState, CountState>(state => state.count, shallowEqual);
  const dispatch = useDispatch();

  const validateCount = useCallback((inputCount: string | null): boolean => {
    if (inputCount === null) {
      alert('取消已操作');
      return false;
    } else if (inputCount === '') {
      alert('不能输入空字符');
      return false;
    } else if (!/^-?[1-9]\d*$/.test(inputCount)) {
      alert('不能输入非整数字符');
      return false;
    } else {
      return true;
    }
  }, []);

  const incrementCountHdl = useCallback(() => dispatch(incrementCount()), [dispatch]);

  const decrementCountHdl = useCallback(() => dispatch(decrementCount()), [dispatch]);

  const incrementAssignCountHdl = useCallback(() => {
    const inputCount = prompt('请输入需要增加的计数');
    const valid = validateCount(inputCount);

    if (!valid) return;

    dispatch(incrementAssignCount(Number(inputCount)));
  }, [dispatch, validateCount]);

  const incrementCountAsyncHdl = useCallback(
    () => dispatch({ type: CountActionConstants.INCREMENT_COUNT_ASYNC }),
    [dispatch]
  );

  const decrementCountAsyncHdl = useCallback(
    () => dispatch({ type: CountActionConstants.DECREMENT_COUNT_ASYNC }),
    [dispatch]
  );

  const incrementAssignAsyncCountHdl = useCallback(() => {
    const inputCount = prompt('请输入需要增加的计数');
    const valid = validateCount(inputCount);

    if (!valid) return;

    dispatch<incrementAssignCountAsyncType>({
      type: CountActionConstants.INCREMENT_ASSIGN_COUNT_ASYNC,
      count: Number(inputCount)
    });
  }, [dispatch, validateCount]);

  return (
    <CountWrap>
      <div className="count-wrap__operates">
        <button onClick={incrementCountHdl}>增加</button>
        <button onClick={decrementCountHdl}>减少</button>
        <button onClick={incrementAssignCountHdl}>增加给定</button>
        <button onClick={incrementCountAsyncHdl}>异步增加</button>
        <button onClick={decrementCountAsyncHdl}>异步减少</button>
        <button onClick={incrementAssignAsyncCountHdl}>异步增加给定</button>
      </div>
      <div className="count-wrap__result">Count: {count}</div>
    </CountWrap>
  );
};

export default React.memo(Count);
