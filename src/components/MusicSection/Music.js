import React, { useState } from "react";
import { Button } from "../ButtonElement";
import NuclearAccidentImage from "../../images/NuclearAccidentLogo.png";
import Paranoia from "../../images/ParanoiaLogo.jpg";

import {
  MainContent,
  MusicContent,
  MusicH1,
  MusicP,
  MusicBtnWrapper,
  MusicImg,
  ImageMusic,
  MusicTextWrapper,
  SecondMusicContent,
  SecondMusicH1,
  SecondMusicP,
  SecondMusicBtnWrapper,
  SecondMusicImg,
  SecondMusicTextWrapper,
} from "./MusicElements";

const Music = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [secondHover, setSecondHover] = useState(false);

  const onSecondHover = () => {
    setSecondHover(!secondHover);
  };

  return (
    <MainContent id="music">
      <MusicContent>
        <MusicTextWrapper>
          <MusicH1>NUCLEAR ACCIDENT</MusicH1>
          <MusicP>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </MusicP>
          <MusicBtnWrapper>
            <Button
              as="a"
              href="https://open.spotify.com/track/3u4UqzwyLbLo9nlHcKbBfk?si=f6b71d27e6ba4170"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Spotify {hover ? "🎧" : "☢️"}
            </Button>
          </MusicBtnWrapper>
        </MusicTextWrapper>
        <MusicImg>
          <ImageMusic src={NuclearAccidentImage} alt="Nulcear Accident" />
        </MusicImg>
      </MusicContent>
      <SecondMusicContent>
        <SecondMusicImg>
          <ImageMusic src={Paranoia} alt="Paranoia" />
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
              onMouseEnter={onSecondHover}
              onMouseLeave={onSecondHover}
            >
              Spotify {secondHover ? "🎧" : "😨"}
            </Button>
          </SecondMusicBtnWrapper>
        </SecondMusicTextWrapper>
      </SecondMusicContent>
    </MainContent>
  );
};

export default Music;
