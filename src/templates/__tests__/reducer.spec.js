import reducer, { initialState } from '../reducer';
import * as constants from '../constants';
import * as appConstants from '@/pages/App/constants';

describe('Analytics Reducer tests', () => {

  describe('LOG_OUT', () => {
    it('should reset to initialState on logout', () => {
      const state = initialState.set('test', 'test');
      const action = { type: appConstants.LOG_OUT };
      const actual = reducer(state, action);
      expect(actual).toEqual(initialState);
    });
  });
});