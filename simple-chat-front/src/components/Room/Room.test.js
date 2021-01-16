import { render } from "@testing-library/react";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Room from "./Room";
configure({ adapter: new Adapter() });

describe("Room component Testing Suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Room />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Room />, div);
  });

  // it("renders the room Barcelona picture", () => {
  //   const room1 = wrapper.find(".room").at(0);
  //   expect(room1.prop("src")).toEqual("https://i.imgur.com/0n0B6rU.jpeg");
  // });

  // it("renders the room Beijing picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/pcumcGA.jpeg"
  //   );
  // });

  // it("renders the room London picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/nCd5rsA.jpeg"
  //   );
  // });

  // it("renders the room Moscow picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/VjDSklf.jpeg"
  //   );
  // });

  // it("renders the room New York picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/XpLmcus.jpeg"
  //   );
  // });

  // it("renders the room Paris picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/QGxIewL.jpeg"
  //   );
  // });

  // it("renders the room San Francisco picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/dHNiGEM.jpeg"
  //   );
  // });

  // it("renders the room Santo Domingo picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/uuAXdEG.jpeg"
  //   );
  // });

  // it("renders the room Talin picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/5DXPVZc.jpeg"
  //   );
  // });

  // it("renders the room Tokyo picture", () => {
  //   expect(wrapper.find(".room__img").prop("src")).toEqual(
  //     "https://i.imgur.com/HvuZDLb.jpeg"
  //   );
  // });

  // it("renders the room name `Room #N`", () => {
  //   expect(wrapper.find(".room__name").text()).toContain("Room #");
  // });
});
