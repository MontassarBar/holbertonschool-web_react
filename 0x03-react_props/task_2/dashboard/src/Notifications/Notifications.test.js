import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem').length).toBe(3);
    });

    it('verify that Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });

    it('verify that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const ul = wrapper.find('ul').childAt(0);
        expect(ul.html()).toBe('<li data-notification-type="default">New course available</li>');
    });
});
