import React from "react";
import { mount } from "enzyme";
import CommentList from "components/commentList";
import Root from "root";

let wrapper;
beforeEach(() => {
  const initalState = {
    comments: ["first", "second"]
  };
  wrapper = mount(
    <Root initalState={initalState}>
      <CommentList />
    </Root>
  );
});
afterEach(() => {
  wrapper.unmount();
});
it("Should render ul", () => {
  expect(wrapper.find("ul").length).toEqual(1);
});

it("Should render one li item per comment ", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("each item text in li should equals to form submited value ", () => {
  expect(
    wrapper
      .find("ul")
      .children()
      .first()
      .text()
  ).toEqual("first");
});
