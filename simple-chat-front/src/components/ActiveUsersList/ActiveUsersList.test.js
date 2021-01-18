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

  it("separates the user names with `,`", () => {
    let wrapper2;
    let mockUsers = [
      {
        id: 1,
        name: "Jay",
      },
      {
        id: 2,
        name: "Axcel",
      },
    ];
    wrapper2 = shallow(
      <ActiveUsersList users={mockUsers} key={mockUsers.id} />
    );
    expect(wrapper2.find(".chat__users").at(2).text()).toContain(",");
  });
});
