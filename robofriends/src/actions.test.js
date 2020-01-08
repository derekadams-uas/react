import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING
} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thinkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thinkMiddleware])

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
})
