import React, { Component, Fragment } from "react";
import { FetchCrew } from "../../fetch";
import CrewContainer from "../CrewContainer";

class CrewPage extends Component {
  render() {
    return (
      <div>
        <FetchCrew>
          {({fetching, data, failed}) => {
            const result = failed ? [] : data;

            return (
              <Fragment>
                {fetching && (
                  <p>
                    Loading ...
                  </p>
                )}
                {result && (
                  <CrewContainer results={result.results} />
                )}
              </Fragment>
            );
          }}
        </FetchCrew>
      </div>
    );
  }
}

export default CrewPage;
