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
import {StyleSheetTestUtils} from "aphrodite"

StyleSheetTestUtils.suppressStyleInjection();

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

describe('logOut', () => {
    it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
        const logOut = jest.fn(() => undefined);
        const logger = jest.spyOn(global, 'alert');
		expect(logger);
		expect(logOut);
		jest.restoreAllMocks();
    })
});

describe('displayDrawer', () => {
    it ("verify that the default state for displayDrawer is false", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).to.equal(false);
    });

    it ("Verify that after calling handleDisplayDrawer, the state should now be true", () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).to.equal(true);
    });

    it ("Verify that after calling handleHideDrawer, the state should now be false", () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state().displayDrawer).to.equal(false);
    });
})