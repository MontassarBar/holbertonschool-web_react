import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import {StyleSheetTestUtils} from "aphrodite"

StyleSheetTestUtils.suppressStyleInjection();

const listNotifications = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
  ]

  const listNotifications2 = []

const listNotifications3 = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
    {id: 4, type: "urgent", value: "xD"},
]

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('NotificationItem').length).toBe(3);
    });

    it('verify that Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });

    it('verify that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const ul = wrapper.find('ul').childAt(0);
        expect(ul.html()).toBe('<li data-notification-type="default">New course available</li>');
    });

    it('check that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find('div.menuItem').length).toBe(1);
    });

    it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find('div.Notifications').length).toBe(0);
    });

    it('check that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('div.menuItem').length).toBe(1);
    });

    it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('div.Notifications').length).toBe(1);
    });

    it('verify that Notifications renders correctly if you pass an empty array', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications2} />);
        expect(wrapper.text().includes('No new notification for now')).toBe(true);
    });

    it("verify that Notifications renders correctly if you don't pass the listNotifications property", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.text().includes('No new notification for now')).toBe(true);
    });

    it("test markAsRead function", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const spy = jest.spyOn(console, 'log');
        wrapper.instance().markAsRead(99);
        expect(spy).toHaveBeenCalledWith('Notification 99 has been marked as read')
        spy.mockRestore();
    });

    it("verify that when updating the props of the component with the same list, the component doesn’t rerender", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
        jest.restoreAllMocks();
    });

    it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.instance().shouldComponentUpdate(listNotifications3)).toBe(true);
        jest.restoreAllMocks();
    });
});
