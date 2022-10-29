import React from "react";
import converter from "seconds-converter";

import "./Footer.scss";

class Footer extends React.Component {
  constructor(parameters) {
    super(parameters);

    this.state = { index: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  componentDidMount() {
    window.setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.state.index = this.state.index + 0.5;

    const { days, hours, minutes, seconds } = converter(this.state.index, "seconds");

    const daysElement = document.querySelector(".days");
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondesElement = document.querySelector(".secondes");

    if (days !== 0) {
      daysElement.style.display = "inline";
      daysElement.innerText = `${days} jour${days > 0 ? "s" : " "}`;
    }

    if (hours !== 0) {
      hoursElement.style.display = "inline";
      hoursElement.innerText = `${hours} heure${hours > 0 ? "s" : " "}`;
    }

    if (minutes !== 0) {
      minutesElement.style.display = "inline";
      minutesElement.innerText = `${minutes} minute${minutes > 0 ? "s" : " "}`;
    }

    secondesElement.innerText = `${seconds} seconde${seconds > 0 ? "s" : " "}`;
  }

  render() {
    return (
      <footer>
        Temps passé sur le site : <span className="days">0 jour</span>{" "}
        <span className="hours">0 heure</span> <span className="minutes">0 minutes</span>{" "}
        <span className="secondes">0 seconde</span>
      </footer>
    );
  }
}

export default Footer;
