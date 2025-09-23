import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import reduxStore from "./Store/store";
import { BrowserRouter } from "react-router-dom";  

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={reduxStore}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </Provider>
);
