import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import {StyleSheetTestUtils} from "aphrodite"

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('verify that Header renders img tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').length).toBe(1);
    });

    it('verify that Header renders h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});
