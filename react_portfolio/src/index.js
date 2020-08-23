import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Clock from "./components/clock/clock";
import Main from "./components/main/main";
import Image from "./components/image/image";
import Resume from "./components/resume/resume";

ReactDOM.render(
  <div class="grid-container">
    <Main />
    <Clock />
    <Image />
    <Resume />
  </div>,
  document.getElementById("root")
);
