import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Paranoia from "../../images/ParanoiaLogo.jpg";
import {
  SecondMusicContent,
  SecondMusicH1,
  SecondMusicP,
  SecondMusicBtnWrapper,
  SecondMusicImg,
  ImageMusic,
  SecondMusicTextWrapper,
} from "./SecondMusicElements";

const SecondMusic = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SecondMusicContent id="music">
      <SecondMusicImg>
        <ImageMusic src={Paranoia} />
      </SecondMusicImg>
      <SecondMusicTextWrapper>
        <SecondMusicH1>PARANOIA</SecondMusicH1>
        <SecondMusicP>
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat
        </SecondMusicP>
        <SecondMusicBtnWrapper>
          <Button
            as="a"
            href="https://open.spotify.com/track/5tI8jSDyebq5NUt2pA1pDy?si=3f1f8885968547c8"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Spotify {hover ? "🎧" : "😨"}
          </Button>
        </SecondMusicBtnWrapper>
      </SecondMusicTextWrapper>
    </SecondMusicContent>
  );
};

export default SecondMusic;
