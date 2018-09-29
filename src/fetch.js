import React from "react";
import { Fetch } from "react-request";

// fetch data from server
export const FetchCrew = (props) => (
  <Fetch
    url="https://randomuser.me/api/?nat=gb&results=5"
    fetchPolicy="network-only"
    {...props}
  />
);
