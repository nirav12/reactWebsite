import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './../src/actions/actions';
import {expect} from 'chai';
import nock from 'nock';
var assert = require('chai').assert;


describe("Test Action", function(){

	afterEach(() => {
	    nock.cleanAll()
	});

	const middleware = [thunk]
	const mockStore = configureMockStore(middleware);

	it("Check error at the time of Fetching User Data", function(){
		var error = true;
		var hasErrored = {
			type: 'USER_HAS_ERRORED',
        	hasErrored: error
		}
		assert.deepEqual(actions.userHasErrored(error), hasErrored);
	});

	it("Check error at the time of Fetching loading Data", function(){
		var error = true;
		var isLoading = {
			type: 'USER_IS_LOADING',
        	isLoading: error
		}
		assert.deepEqual(actions.userIsLoading(error), isLoading);
	});

	it('fetchData', function(){
		nock('https://jsonplaceholder.typicode.com')
			.get('/users')
			.reply(200, {})

		const expectedActions = [ 
			'USER_IS_LOADING','USER_IS_LOADING','USER_FETCH_DATA_SUCCESS'
		]

		const store=mockStore({ });

		return store.dispatch(actions.fetchData('https://jsonplaceholder.typicode.com/users')).then(() => {
		const actualActions = store.getActions().map(action => action.type)
	      // return of async actions
	      assert.deepEqual(actualActions, expectedActions);
	   //   expect(store.getActions()).equal(expectedActions);
	    })

	});

});