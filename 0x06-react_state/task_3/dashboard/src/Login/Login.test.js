import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";
import {StyleSheetTestUtils} from "aphrodite"

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('verify that Login renders three input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(3);
    });

    it('verify that Login renders two label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2);
    });

    it('test to verify that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.instance().state.enableSubmit).toBe(false);
    });

    it('test to verify that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input[name="email"]').simulate('change', { target: { value: 'monta@monta.com' } });
        wrapper.find('input[name="password"]').simulate('change', { target: { value: 'monta' } });
        expect(wrapper.instance().state.enableSubmit).toBe(true);
    });
});
