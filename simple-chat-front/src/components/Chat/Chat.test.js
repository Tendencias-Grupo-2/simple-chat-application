import { render } from "@testing-library/react";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Chat from "./Chat";
import Room from "../Room/Room";
import MockedSocket from "socket.io-mock";

configure({ adapter: new Adapter() });

describe("Chat Testing Suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Chat />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Chat />, div);
  });

  it("Sockets should be able to talk to each other without a server", () => {
    let socket = new MockedSocket();
    socket.on("message", function (message) {
      expect(message).toEqual("Hello World!");
    });
    socket.socketClient.emit("message", "Hello World!");
  });

  it("renders the title `Select a room from the list to start chatting.`", () => {
    expect(wrapper.find(".chat__left--title").text()).toContain(
      "Select a room from the list to start chatting."
    );
  });

  it("renders the subtitle `Simple Chat Application`", () => {
    expect(wrapper.find(".chat__left--subtitle").text()).toContain(
      "Simple Chat Application"
    );
  });

  it("renders the room child components without crashing", () => {
    expect(wrapper.containsMatchingElement(<Room />)).toEqual(true);
  });

  it("renders the rooms names correctly", () => {
    const rooms = wrapper.find(".room").map((node) => node.text());
    expect(rooms).toEqual([
      "Barcelona",
      "Beijing",
      "London",
      "Moscow",
      "New York",
      "Paris",
      "San Francisco",
      "Santo Domingo",
      "Talin",
      "Tokyo",
    ]);
  });

  it("Clicks Room #1 and triggers joinRoom function", () => {
    const room1 = wrapper.find(".room").at(1);
    room1.simulate("click");
  });

  it("Clicks Exit Room and triggers exitRoom function", () => {
    const room1 = wrapper.find(".room").at(1);
    room1.simulate("click");
    const secondNode = wrapper.find(".chat__headertext--exit");
    secondNode.simulate("click");
  });

  it("renders the messages correctly", () => {
    const messages = wrapper.find(".message").map((node) => node.text());
    expect(messages).toEqual([]);
  });

  it("Clicks Room #2 and types `Hello` on the message bar", () => {
    const room2 = wrapper.find(".room").at(2);
    room2.simulate("click");
    const barInput = wrapper.find(".chat__barinput");
    barInput.simulate("change", { target: { value: "Hello" } });
  });

  it("Clicks the send message button and triggers sendMessage function", () => {
    const room3 = wrapper.find(".room").at(3);
    room3.simulate("click");
    const barInput = wrapper.find(".chat__barinput");
    barInput.simulate("change", { target: { value: "Hello" } });
    const sendMessageButton = wrapper.find(".chat__barbtn");
    sendMessageButton.simulate("click");
  });

  it("Clears the message bar after sending a message", () => {
    const room3 = wrapper.find(".room").at(3);
    room3.simulate("click");
    const barInput = wrapper.find(".chat__barinput");
    barInput.simulate("change", { target: { value: "Hello" } });
    const sendMessageButton = wrapper.find(".chat__barbtn");
    sendMessageButton.simulate("click");
    expect(barInput.text()).toBe("");
  });
});
