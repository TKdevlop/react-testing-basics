import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "root";
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapper.unmount();
});
it("should contain textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("TEXT AREA", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", { target: { value: "test" } });
  });
  it("has a textarea where user can type", () => {
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("test");
  });
  it("should reset textarea when submit", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
