import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import interventionsReducer from "./interventionsSlice";
import rootSaga from "../sagas/interventionsSaga";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { interventions: interventionsReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
