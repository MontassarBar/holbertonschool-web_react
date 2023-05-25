import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import {StyleSheetTestUtils} from "aphrodite"

StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySectionWithMarginBottom />", () => {

    it("checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component", () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>);
        expect(wrapper.contains(<BodySection title='test title'><p>test children node</p></BodySection>)).toBe(true);
    });
})