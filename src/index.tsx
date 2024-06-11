import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
// import rootReducer from "states";
import createStore from "redux";

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    {/* <ReduxProvider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ReduxProvider> */}
  </>
);
