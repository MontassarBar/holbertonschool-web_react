import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

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
});
