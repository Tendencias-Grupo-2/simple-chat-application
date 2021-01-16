import { render } from "@testing-library/react";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Room from "./Room";
configure({ adapter: new Adapter() });

describe("Room component Testing Suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Room Name="Barcelona" Picture="https://i.imgur.com/0n0B6rU.jpeg" />
    );
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Room />, div);
  });

  it("renders as expected", () => {
    const roomImg = wrapper.find(".room .room__img");
    const roomText = wrapper.find(".room .room__name");
    expect(roomImg.prop("src")).toEqual("https://i.imgur.com/0n0B6rU.jpeg");
    expect(roomText.text()).toEqual("Barcelona");
  });
});
