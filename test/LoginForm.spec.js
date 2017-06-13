import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import LoginForm from './../src/components/LoginFormComponent';

describe('<LoginForm>', function(){
	it('should have user name for login', function(){
		const wrapper = shallow(<LoginForm />);
		expect(wrapper.find('input')).to.have.length(2);
	});

	it('should have a button', function(){
		const wrapper = shallow(<LoginForm />);
		expect(wrapper.find('button')).to.have.length(1);
	});

});