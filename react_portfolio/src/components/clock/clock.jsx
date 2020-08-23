import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {
  componentDidMount() {
    this.showTime();
  }

  showTime = () => {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h === 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("datetime").innerText = time;
    document.getElementById("datetime").textContent = time;

    setTimeout(this.showTime, 1000);
  };

  render() {
    return (
      <header class="header">
        <span id="datetime" onload={this.showTime}>
          There should be a clock here...
        </span>
      </header>
    );
  }
}

export default Clock;
