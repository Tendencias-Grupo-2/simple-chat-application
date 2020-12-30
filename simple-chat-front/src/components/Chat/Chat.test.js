import { render } from '@testing-library/react';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Chat from './Chat';
configure({ adapter: new Adapter() });

describe("Chat Testing Suite", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Chat />);
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Chat />, div);
    });

    it('renders the title `Select a room from the list to start chatting.`', () => {
        expect(wrapper.find('.chat__left--title').text()).toContain("Select a room from the list to start chatting.");
    });

    it('renders the subtitle `Simple Chat Application`', () => {
        expect(wrapper.find('.chat__left--subtitle').text()).toContain("Simple Chat Application");
    });


});