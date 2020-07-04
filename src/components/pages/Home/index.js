import React from "react";
import "../style.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page__centered-container">
          <h1>Halison Patrick Xavier</h1>
          <h2>Desenvolvedor Front-End | Músico</h2>
          <button>+ Sobre mim</button>
        </div>
      </div>
    );
  }
}
