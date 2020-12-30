import { render } from '@testing-library/react';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserNameInput from './UserNameInput';
configure({ adapter: new Adapter() });

describe("UserNameInput Testing Suite", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserNameInput />);
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<UserNameInput />, div);
    });

    it('renders the title `Give us your username!`', () => {
        expect(wrapper.find('.userinput__title').text()).toContain("Give us your username!");
    });

    it('renders the user name capture input without crashing', () => {
        const input = document.createElement('input');
        render(<UserNameInput />, input);
    });

    it('renders a button with the text of `Join`', () => {
        expect(wrapper.find('.userinput__btn--join').text()).toBe("Join");
    });

    it('renders a button with the text of `Clear`', () => {
        expect(wrapper.find('.userinput__btn--clear').text()).toBe("Clear");
    });

    it('renders the click event and sets user joined flag as true', () => {
        wrapper.find('.userinput__btn--join').simulate('click');
        expect(wrapper.find('.userinput__userjoined').text()).toBe("true");
    });

    it('renders the click event and clears the user name value', () => {
        wrapper.find('.userinput__btn--clear').simulate('click');
        expect(wrapper.find('.userinput__username').text()).toBe("");
    });
});

