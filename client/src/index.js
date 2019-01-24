import React from "react";
import ReactDOM from "react-dom";
import FriendPostProvider from "./provider/FriendPostProvider";
import App from "./App";

ReactDOM.render(
  <FriendPostProvider>
    <App />
  </FriendPostProvider>,
  document.getElementById("root")
);
