import React from "react";
import "./Container.scss";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import react from "./assets/react.svg";
import javascript from "./assets/javascript.png";

import Projets from "./Projets/Projets";

class Container extends React.Component {
  constructor(parameters) {
    super(parameters);

    this.technos = [
      {
        name: "HTML",
        icon: "",
      },
      {
        name: "CSS",
        icon: "",
      },
      {
        name: "React",
        icon: "",
      },
      {
        name: "JS",
        icon: "",
      },
    ];

    this.images = {
      css,
      html,
      react,
      js: javascript,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="accueil">
          <div className="technos">
            <p>Technos</p>

            <ul>
              {this.technos.map(({ name }) => (
                <li key={name}>
                  <div className={name.toLowerCase()}>
                    <img
                      className={name.toLowerCase()}
                      src={this.images[name.toLowerCase()]}
                      alt={`Icone ${name}`}
                    />
                  </div>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Projets />
      </div>
    );
  }
}

export default Container;
