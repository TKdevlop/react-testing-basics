import { ADD_COMMENT } from "actions/types";
import { FETCH_COMMENT } from "../actions/types";

const initialState = [];

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_COMMENT:
      return [...state, actions.payLoad];
    case FETCH_COMMENT:
      const comments = actions.payLoad.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
};
