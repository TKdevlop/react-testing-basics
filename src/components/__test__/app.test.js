import React from "react";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
import Root from "root";
import App from "../App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});
it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
