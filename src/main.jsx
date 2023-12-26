import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter } from "react-router-dom";
import { myApi } from "./store/Slice.jsx";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <ApiProvider api={myApi}>
          <App />
        </ApiProvider>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
