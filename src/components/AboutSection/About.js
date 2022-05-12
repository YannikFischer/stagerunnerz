import React from "react";
import Boss from "../../images/Boss.JPG";
import BossTilt from "../../images/BossHeadTiltLeft.jpg";
import {
  AboutContent,
  AboutImg,
  ImageAbout,
  AboutH1,
  AboutP,
  AboutTextWrapper,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContent id="about">
      <AboutImg>
        <ImageAbout src={BossTilt} />
      </AboutImg>
      <AboutTextWrapper>
        <AboutH1>Kai</AboutH1>
        <AboutP>
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </AboutP>
      </AboutTextWrapper>
      <AboutImg>
        <ImageAbout src={Boss} />
      </AboutImg>
    </AboutContent>
  );
};

export default About;
