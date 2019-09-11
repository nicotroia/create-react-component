import { fromJS } from 'immutable';

import * as appConstants from '@/pages/App/constants';
{{imports.constants}}

export const initialState = fromJS({
});

const reducer = (state = initialState, action = {}) => {
  const { type } = action;
  const actions = {
    [appConstants.LOG_OUT]: () => {
      return initialState;
    },

  }[type];

  if (actions) return actions(state, action.payload, action.meta);
  else return state;
};

export default reducer;
