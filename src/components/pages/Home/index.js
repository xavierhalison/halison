import React from "react";
import { changePage } from "../../../redux/actions/pageActions";
import "../style.css";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { changePage } = this.props;
    return (
      <div className="page">
        <div className="page__centered-container">
          <h1>Halison Patrick Xavier</h1>
          <h2>Desenvolvedor Front-End | Músico</h2>
          <button
            onClick={() => {
              changePage("EXPERIENCE");
            }}
          >
            + Sobre mim
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (nextPage) => dispatch(changePage(nextPage)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
