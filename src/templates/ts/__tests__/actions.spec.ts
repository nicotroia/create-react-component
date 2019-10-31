import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as constants from '../constants';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('{{name}} Action tests', () => {
});
