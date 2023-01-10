import { createHashHistory } from "@remix-run/router";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";

export const sagaMiddleware = createSagaMiddleware();

const history = createHashHistory;

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );
}
