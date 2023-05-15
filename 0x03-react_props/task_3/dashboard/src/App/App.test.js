import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications"

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
});
