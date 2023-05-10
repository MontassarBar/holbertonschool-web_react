import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('verify that Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });
});
