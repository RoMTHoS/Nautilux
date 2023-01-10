import React from "react";
import { Provider } from "react-redux";

import configureStore, { sagaMiddleware } from "./store";
import rootSaga from "./sagas";

import Header from "./components/Header";
import Router from "./Router";

const store = configureStore();
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
