import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

StyleSheetTestUtils.suppressStyleInjection();

describe('<NotificationsItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('Verify that by passing dummy type and value props, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        const props = wrapper.props();
        expect(wrapper.html()).to.equal(`<li data-notification-type="${props['data-notification-type']}">test</li>`);
    });

    it('Verify that by passing a dummy html prop, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }}/>);
        const props = wrapper.props();
        expect(wrapper.html()).to.equal(`<li data-notification-type="${props['data-notification-type']}"><u>test</u></li>`);
    });

    it('Check that when simulating a click on the component, the spy is called with the right ID argument', () => {
        const MAR = jest.fn();
        const wrapper = shallow(<NotificationItem id={99} markAsRead={MAR} />);
        wrapper.find('li').simulate('click');
        expect(MAR.mock.calls[0][0]).equal(99);
        MAR.mockRestore();
    });
});
