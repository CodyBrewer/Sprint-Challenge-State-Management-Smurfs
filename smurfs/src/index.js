import React from "react";
import ReactDOM from "react-dom";
import Root from "./App/Root";
import store from "./App/store";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
