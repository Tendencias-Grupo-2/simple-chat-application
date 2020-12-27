import { render } from '@testing-library/react';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TestComponent from './TestComponent';
configure({ adapter: new Adapter() });

describe("TestComponent Testing Suite", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TestComponent />);
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<TestComponent />, div);
    });

    it('renders the title of the component', () => {
        expect(wrapper.find('h2').text()).toContain("My testComponent");
    });

    it('renders a button with the text of `Press Me`', () => {
        expect(wrapper.find('.pressme-btnp').text()).toBe("Press Me");
    });

    it('renders the initial value of state in a div', () => {
        expect(wrapper.find('.pressme-value').text()).toBe("0");
    });

    it('renders the click event and increments value', () => {
        wrapper.find('.pressme-btnp').simulate('click');
        expect(wrapper.find('.pressme-value').text()).toBe("1");
    });

    it('renders the click event and decreases value', () => {
        wrapper.find('.pressme-btnm').simulate('click');
        expect(wrapper.find('.pressme-value').text()).toBe("-1");
    });

});