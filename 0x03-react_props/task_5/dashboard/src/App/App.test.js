import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications"
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ]
  
  const listNotifications = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
  ]

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('verify that App renders Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications listNotifications={listNotifications} />)).to.equal(true);
    });

    it('verify that App renders Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).to.equal(true);
    });

    it('verify that App renders Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).to.equal(true);
    });

    it('verify that App renders Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).to.equal(true);
    });

    it('check that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<CourseList />)).to.equal(false);
    });
});

describe('<App isLoggedIn={true}/>', () => {
    it("verify that the Login component is not included", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.contains(<Login />)).to.equal(false);
    });

    it("verify that the CourseList component is included", () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<CourseList listCourses={listCourses} />)).to.equal(true);
    });
});
