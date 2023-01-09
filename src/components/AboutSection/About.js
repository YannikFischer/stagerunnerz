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
        <ImageAbout src={BossTilt} alt="BossTilt" />
      </AboutImg>
      <AboutTextWrapper>
        <AboutH1>Kai</AboutH1>
        <AboutP>
          Kai started producing edm music at the age of 12. He made his tracks in his bedroom. He then moved on to make hardstyle music in his self made studio. After producing some tracks, he enjoyed making frenchcore music the most.
        </AboutP>
      </AboutTextWrapper>
      <AboutImg>
        <ImageAbout src={Boss} alt="Boss" />
      </AboutImg>
    </AboutContent>
  );
};

export default About;
