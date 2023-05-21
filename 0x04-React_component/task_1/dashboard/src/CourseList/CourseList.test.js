import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ]

const listCourses2 = []

describe('<CourseList />', () => {
    it("Check that it renders CourseList component without crashing", () =>{
        shallow(<CourseList />);
    });

    it("Check that it renders the 5 different rows", () =>{
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find('CourseListRow').length).toBe(5);
    });

    it("verify that CourseList renders correctly if you pass an empty array", () =>{
        const wrapper = shallow(<CourseList listCourses={listCourses2} />);
        expect(wrapper.text().includes('No course available yet')).toBe(true);
    });

    it("verify that CourseList renders correctly if you pass an empty array", () =>{
        const wrapper = shallow(<CourseList />);
        expect(wrapper.text().includes('No course available yet')).toBe(true);
    });

});