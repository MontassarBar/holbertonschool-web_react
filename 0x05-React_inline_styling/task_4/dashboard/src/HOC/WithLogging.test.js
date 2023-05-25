import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';


describe("WithLogging tests", () => {
    it("make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        const Component = WithLogging(() => <a></a>);
        const wrapper = mount(<Component />);
        expect(logSpy).toHaveBeenCalledWith("Component Component is mounted");
        wrapper.unmount();
        expect(logSpy).toHaveBeenCalledWith("Component Component is going to unmount");
        logSpy.mockRestore();
    });

    it(" make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        const Component = WithLogging(Login);
        const wrapper = mount(<Component />);
        expect(logSpy).toHaveBeenCalledWith("Component Login is mounted");
        wrapper.unmount();
        expect(logSpy).toHaveBeenCalledWith("Component Login is going to unmount");
        logSpy.mockRestore();
    });
})
