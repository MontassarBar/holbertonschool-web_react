import { shallow } from 'enzyme';
import App from '../../../task_4/dashboard/src/App';

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('verify that App renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    it('verify that App renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    it('verify that App renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
});
