import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';


describe("<BodySection />", () => {

    it("checking that shallowing the component should render correctly the children and one h2 element", () => {
        const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('p').length).toBe(1);
        const h2 = wrapper.find('h2');
        const p = wrapper.find('p');
        expect(h2.text()).toBe('test title');
        expect(p.text()).toBe('test children node');
    });
})