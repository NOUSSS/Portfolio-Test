import React from "react";
import "./Projets.scss";

class Projets extends React.Component {
  constructor(parameters) {
    super(parameters);

    this.projects = [
      {
        name: "📺 Mugiwara-no Streaming",
        url: "https://nousss.github.io",
        description:
          "Un site de streaming pour regarder One Piece en vostfr avec tout les épisodes !",
      },
    ];
  }

  render() {
    return (
      <div style={{ display: "none" }} className="projets">
        <h1>Mes projets</h1>

        <ul>
          {this.projects.map(({ name, url, description }) => {
            return (
              <li>
                <a target="_blank" href={url}>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Projets;
