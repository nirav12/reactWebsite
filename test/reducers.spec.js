import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './../src/actions/actions';
import {expect} from 'chai';
import nock from 'nock';
import * as reducers from './../src/reducers/RegFormReducers';
var assert = require('chai').assert;


describe("Test Reducers", function(){
	it("Should return state", function(){
		var passingAction = {
	        type: 'USER_HAS_ERRORED',
	        hasErrored: true
    	};

    	var expectedResult = true;
		assert.deepEqual(reducers.userHasErrored(false,passingAction),expectedResult);
	});

});