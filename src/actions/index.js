import { ADD_COMMENT, FETCH_COMMENT } from "./types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: ADD_COMMENT,
    payLoad: comment
  };
}

export function fetchComment() {
  return axios
    .get("http://jsonplaceholder.typicode.com/comments")
    .then(data => {
      return {
        type: FETCH_COMMENT,
        payLoad: data
      };
    });
}
