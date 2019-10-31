import { fromJS } from 'immutable';

import * as selectors from '../selectors';

describe('{{name}} Selector Tests', () => {
  const state = {
    {{name}}: fromJS({
    })
  };

  describe('Basic selectors', () => {
    const selectorMap = fromJS({
    });

    selectorMap.keySeq().forEach(key => {
      const expected = state.{{name}}.get(key);
      const selector = selectorMap.get(key);

      it(`should select ${key}`, () => {
        const actual = selector(state);
        expect(actual).toEqual(expected);
      });
    });
  });
});
