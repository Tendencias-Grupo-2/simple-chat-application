import { render } from '@testing-library/react';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Room from './Room';
configure({ adapter: new Adapter() });

describe("Room component Testing Suite", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Room />);
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Room />, div);
    });

    it('renders the room placeholder picture', () => {
        expect(wrapper.find('.room__img').prop('src')).toEqual('http://placecorgi.com/75/75');
    });

    it('renders the room name `Room #N`', () => {
        expect(wrapper.find('.room__name').text()).toContain("Room #");
    });

});