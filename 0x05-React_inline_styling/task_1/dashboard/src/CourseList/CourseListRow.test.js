import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it("When isHeader is true, a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist",() =>{
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null}/>);
        const props = wrapper.props('textFirstCell');
        expect(wrapper.html()).to.equal(`<tr style="background-color:#deb5b545"><th colSpan="2">${props.children.props.children}</th></tr>`);
    });

    it("When isHeader is true, a check to test the component renders two cells when textSecondCell is present",() =>{
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
        const props = wrapper.props();
        expect(wrapper.html()).to.equal(`<tr style="background-color:#deb5b545"><th>${props.children[0].props.children}</th><th>${props.children[1].props.children}</th></tr>`);
    });

    it("When isHeader is false,  a check to test the component renders correctly two td elements within a tr element",() =>{
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
        const props = wrapper.props();
        expect(wrapper.html()).to.equal(`<tr style="background-color:#f5f5f5ab"><td>${props.children[0].props.children}</td><td>${props.children[1].props.children}</td></tr>`);
    });
});