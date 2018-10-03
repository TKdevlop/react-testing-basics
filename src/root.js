import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers";

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initalState = {} }) => {
  const store = createStore(
    reducers,
    initalState,
    composeEnhanser(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};
