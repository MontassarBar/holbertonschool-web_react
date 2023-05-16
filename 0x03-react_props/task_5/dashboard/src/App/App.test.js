import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications"
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('verify that App renders Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).to.equal(true);
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
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<Login />)).to.equal(false);
    });

    it("verify that the CourseList component is included", () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<CourseList />)).to.equal(true);
    });
});
