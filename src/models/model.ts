/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2021-04-02 19:13:01
 */
import type {  Reducer } from 'umi';

// import { queryFakeList } from './service';

export type StateType = {
  token: string;
};

export type ModelType = {
  namespace: string;
  state: StateType;
  reducers: {
    token: Reducer<StateType>;
  };
};

const Model: ModelType = {
  namespace: 'global',

  state: {
    token: '',
  },

  reducers: {
    token(state, action) {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
};

export default Model;
