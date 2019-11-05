import { Reducer } from 'redux';
import { RecordOf, Record } from 'immutable';
import { ActionHandlers, AnyAction } from 'vidy-redux';

import * as appConstants from '@/pages/App/constants';
import { {{name}}, Actions } from './types';
{{imports.constants}}

export const stateInitializer = Record<{{name}}>({
  
});
export const initialState: RecordOf<{{name}}> = stateInitializer();

export const reducer: Reducer<RecordOf<{{name}}>, AnyAction> = (
  state = initialState,
  action
) => {
  const type: Actions['type'] = action.type;

  const handlers: ActionHandlers<RecordOf<{{name}}>, Actions> = {
    
    [appConstants.LOG_OUT]: () => {
      return initialState;
    },
  };
  const handler = handlers[type];

  if (handler) return handler(state, action.payload, action.meta, action.error);
  return state;
};

export default reducer;
