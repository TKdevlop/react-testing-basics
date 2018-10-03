import { ADD_COMMENT } from "actions/types";
import commentReducer from "reducers/CommentReducers";

it("should add comment", () => {
  const actions = {
    type: ADD_COMMENT,
    payLoad: "jeff"
  };
  const newState = commentReducer([], actions);
  expect(newState).toEqual(["jeff"]);
});
it("should return orginal state when invalid action occur", () => {
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
