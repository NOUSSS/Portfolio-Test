import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(parameters) {
    super(parameters);

    this.category = [
      {
        name: "Accueil",
        current: true,
      },
      {
        name: "Projets",
        current: false,
      },
    ];
  }

  ChangeCategory({ target: { id } }) {
    const current = document.querySelector(".current");
    const element = document.querySelector(`#${id}`);

    if (current === element) return;

    element.classList.add("current");
    current.classList.remove("current");

    window.history.pushState(null, null, id);

    const acc = document.querySelector(".accueil");
    const projets = document.querySelector(".projets");

    switch (id.toLowerCase()) {
      case "projets": {
        projets.style.display = "flex";
        acc.style.display = "none";

        break;
      }

      case "accueil": {
        projets.style.display = "none";
        acc.style.display = "flex";

        break;
      }
    }
  }

  render() {
    return (
      <header>
        <h1>Nouss.</h1>

        <ul>
          {this.category.map((c) => (
            <li
              id={c.name}
              onClick={this.ChangeCategory}
              key={c.name}
              className={c?.current ? "current" : ""}
            >
              {c.name}
            </li>
          ))}
        </ul>

        <div className="links">
          <a target="_blank" href="https://github.com/NOUSSS">
            Github
          </a>
          <a target="_blank" href="https://youtube.com/c/nouss">
            Youtube
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
