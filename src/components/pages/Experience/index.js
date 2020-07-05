import React from "react";
import { connect } from "react-redux";
import { changePage } from "../../../redux/actions/pageActions";

class Experience extends React.Component {
  render() {
    const { changePage } = this.props;
    return <h1 onClick={() => changePage("HOME")}>Experience</h1>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (nextPage) => dispatch(changePage(nextPage)),
  };
};

export default connect(null, mapDispatchToProps)(Experience);
