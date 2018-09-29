import React, { Component } from "react";
import PropTypes from "prop-types";
import CrewItem from "../CrewItem";

class CrewContainer extends Component {
  render() {
    const { results } = this.props;

    const body = results.map(item => (
      <CrewItem key={item.id.value} item={item} />
    ));

    return (
      <div>
        {body}
      </div>
    );
  }
}

CrewContainer.propTypes = {
  // From CrewPage
  results: PropTypes.array.isRequired
};

export default CrewContainer;
