import React from 'react';
import {mount,shallow} from 'enzyme';
import {expect} from 'chai';
import {connect,Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import RegFormComponent from './../src/components/RegFormComponent';


describe("<RegFormComponent />", function (){

	const intialState = {name: "Nirav"}

	const mockStore = configureStore()

	let store, container

	beforeEach(()=>{
		store = mockStore(intialState)
		const props = {
		  store: store
		};
		container = mount(<Provider store={store}><RegFormComponent {...props} /></Provider>);

	});

	it('should have a button', function(){
		
		expect(container.find('Button')).to.have.length(1);
	});

	it('Button Click', function(){
		
		container.find('Button').simulate('click');
	});

	it('+++ check Prop matches with initialState', function(){
		expect(container.prop('name').toBe(initialState.name))
	});

});