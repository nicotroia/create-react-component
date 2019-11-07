import { Map } from 'immutable';
import { DeepPartial } from 'redux';

import { RootState } from '@/rootReducer';
import * as selectors from '../selectors';
import { stateInitializer } from '../reducer';
import { {{name}}, {{name}}Key, {{name}}elector } from './types';

const initialState = stateInitializer();
const getState = (
  initialState: Partial<{{name}}>,
): DeepPartial<RootState> => ({
  {{name}}: initialState,
});

const validateSelector = <F extends {{name}}Key>(
  key: F,
  selector: {{name}}Selector<F>
) => {
  const expected = initialState.get(key);
  const actual = selector(getState(initialState) as RootState);
  return expect(actual).toEqual(expected);
};

describe('{{name}} Selector Tests', () => {
  describe('Basic selectors', () => {
    const selectorMap = Map({
      searchInput: selectors.selectSearchInput,
    });

    selectorMap.keySeq().forEach((key: {{name}}Key) => {
      const selector = selectorMap.get(key);

      it(`should select ${key}`, () => validateSelector(key, selector));
    });
  });
});
