import React from "react";
import Festival from "../../images/festivalBackground.jpg";
import TourDateBox from "./TourDateBox";
import {
  TourContent,
  TourImg,
  ImageTour,
  TourDatesContainer,
  TourH1,
} from "./TourElements";

const Tour = () => {
  return (
    <TourContent id="tour">
      <TourDatesContainer>
        <TourH1>Tour Dates</TourH1>
        <TourDateBox
          date="21.5.2022"
          location="Steinebach"
          city="Dornbirn, Vorarlberg"
        />
        <TourDateBox
          date="7.7.2022"
          location="Electric Love Festival"
          city="Salzburg, Salzburg"
        />
        <TourDateBox
          date="6.8.2022"
          location="Hard Tribe"
          city="Bad Abling, Deutschland"
        />
      </TourDatesContainer>
      <TourImg>
        <ImageTour src={Festival} />
      </TourImg>
    </TourContent>
  );
};

export default Tour;
