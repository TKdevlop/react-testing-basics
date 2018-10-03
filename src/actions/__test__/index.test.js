import { saveComment } from "actions";
import { ADD_COMMENT } from "actions/types";
describe("saveComment", () => {
  it("should return a payLoad with ADD_COMMENT actions", () => {
    expect(saveComment("test")).toEqual({ type: ADD_COMMENT, payLoad: "test" });
  });
});
