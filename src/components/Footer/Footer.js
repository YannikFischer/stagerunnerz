import React from "react";
import Instagram from "../../images/instagram-6-64.png";
import Youtube from "../../images/youtube-6-64.png";
import Tiktok from "../../images/tiktok-64.png";
import {
  FooterContainer,
  FooterContent,
  FooterBox,
  FooterTitle,
  FooterText,
  FooterIcons,
  Icon,
} from "./FooterElements";

const Footer = () => {
  const onClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBox>
          <FooterTitle>Impressum</FooterTitle>
        </FooterBox>
        <FooterBox>
          <FooterTitle>Team</FooterTitle>
          <FooterText>Yannik Fischer</FooterText>
          <FooterText>Mayer Kayer</FooterText>
        </FooterBox>
        <FooterBox>
          <FooterTitle>Social Media</FooterTitle>
          <FooterIcons>
            <Icon
              src={Instagram}
              onClick={() => onClick("https://www.instagram.com/stagerunnerz/")}
            />
            <Icon
              src={Youtube}
              onClick={() =>
                onClick(
                  "https://www.youtube.com/channel/UCsyGowtRDhKe4w9HFl0EtZg"
                )
              }
            />
            <Icon
              src={Tiktok}
              onClick={() => onClick("https://www.tiktok.com/@stagerunnerz")}
            />
          </FooterIcons>
        </FooterBox>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
