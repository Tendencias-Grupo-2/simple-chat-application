import { render } from "@testing-library/react";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ActiveUsersList from "./ActiveUsersList";
configure({ adapter: new Adapter() });

describe("Room component Testing Suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActiveUsersList />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<ActiveUsersList />, div);
  });

  it("renders the text `Currently chatting: {userNames}`", () => {
    expect(wrapper.find(".chat__users").text()).toContain(
      "💬 Currently chatting:"
    );
  });
});
