import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PersonWrapper = styled.div`
   align-items: center;
   background: #eee;
   border: 1px solid rgba(0, 0, 0, 0.3);
   display: flex;
   height: 150px;
   flex-direction: row;
   margin-bottom: 20px;
   padding: 10px;
   width: 250px;
`;

const PersonPhoto = styled.div`
   border-radius: 50%;
   height: 48px;
   margin-right: 10px;
   overflow: hidden;
   width: 48px;
`;

const PersonName = styled.div`
   display: flex;
   flex-direction: row;
`;

class CrewItem extends Component {
  render() {
    const { name: { last, first }, picture: { thumbnail } } = this.props.item;

    return (
      <PersonWrapper>
        <PersonPhoto>
          <img src={thumbnail} alt="photo" />
        </PersonPhoto>
        <PersonName>
          {`${first.toUpperCase()} ${last.toUpperCase()}`}
        </PersonName>
      </PersonWrapper>
    );
  }
}

CrewItem.propTypes = {
  // From CrewContainer
  item: PropTypes.object.isRequired
};

export default CrewItem;
