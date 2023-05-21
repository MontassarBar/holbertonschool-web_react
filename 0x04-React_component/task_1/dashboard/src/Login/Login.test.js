import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('verify that Login renders two input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
    });

    it('verify that Login renders two label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2);
    });
});
