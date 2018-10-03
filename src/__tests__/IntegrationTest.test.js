import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../App";

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: ["Comment 1", "Comment 2", "comment 3"]
  });
});
afterEach(() => {
  wrapper.unmount();
});

it("should fetch list of comments and display it", () => {
  wrapper.find("button .getComments").simulate("click");
  moxios.wait(() => {
    wrapper.update();
    wrapper.find("ul li").length(2);
    wrapper
      .find("ul")
      .children()
      .first()
      .text()
      .toEqual("Comment 1");
  });
});
