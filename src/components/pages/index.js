import React from "react";
import Home from "./Home";
import Experience from "./Experience";
import { connect } from "react-redux";

class Pages extends React.Component {
  render() {
    const { currentPage } = this.props;

    switch (currentPage) {
      case "HOME":
        return <Home />;
      case "EXPERIENCE":
        return <Experience />;
      default:
        return <Home />;
    }
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Pages);
