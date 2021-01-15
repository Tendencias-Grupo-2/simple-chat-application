import { render } from '@testing-library/react';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Message from './Message';
configure({ adapter: new Adapter() });

describe("Message component Testing Suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Message />);
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Message />, div);
    });

    it('renders the message time correctly `', () => {
        expect(wrapper.find('.message__time').text()).toContain("🕒");
    });

});