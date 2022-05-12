import React from "react";
import {
  TourDateBoxContainer,
  TourDate,
  TourLocation,
  TourLocationCity,
} from "./TourElements";

const TourDateBox = (props) => {
  return (
    <TourDateBoxContainer>
      <TourDate>{props.date}</TourDate>
      <TourLocation>{props.location}</TourLocation>
      <TourLocationCity>{props.city}</TourLocationCity>
    </TourDateBoxContainer>
  );
};

export default TourDateBox;
