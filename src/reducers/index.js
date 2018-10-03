import { combineReducers } from "redux";
import CommentReducers from "reducers/CommentReducers";

export default combineReducers({
  comments: CommentReducers
});
