import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Clock from "./components/clock/clock";
import Main from "./components/main/main";
import Image from "./components/image/image";
import Resume from "./components/resume/resume";
import Links from "./components/links/links";
import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";
import Four from "./components/four/four";

ReactDOM.render(
  <div class="grid-container">
    <Main />
    <Clock />
    <Image />
    <Resume />
    <Links />
    <One />
    <Two />
    <Three />
    <Four />
  </div>,
  document.getElementById("root")
);
