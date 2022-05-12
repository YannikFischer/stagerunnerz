import React from "react";
import HeroImage from "../../images/BannerLogo.PNG";

import { HeroContainer, HeroBg, ImageBg } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={HeroImage} />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
