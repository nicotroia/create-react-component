import * as appConstants from '@/pages/App/constants';
import reducer, { initialState } from '../reducer';
import * as constants from '../constants';

describe('{{name}} Reducer tests', () => {

  describe('LOG_OUT', () => {
    it('should reset to initialState on logout', () => {
      const state = initialState.set('test', 'test');
      const action = { type: appConstants.LOG_OUT };
      const actual = reducer(state, action);
      expect(actual).toEqual(initialState);
    });
  });
});
