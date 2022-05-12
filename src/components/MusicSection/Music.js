import React, { useState } from "react";
import { Button } from "../ButtonElement";
import NuclearAccidentImage from "../../images/NuclearAccidentLogo.png";
import {
  MusicContent,
  MusicH1,
  MusicP,
  MusicBtnWrapper,
  MusicImg,
  ImageMusic,
  MusicTextWrapper,
} from "./MusicElements";

const Music = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MusicContent id="music">
      <MusicTextWrapper>
        <MusicH1>NUCLEAR ACCIDENT</MusicH1>
        <MusicP>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
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
        <ImageMusic src={NuclearAccidentImage} />
      </MusicImg>
    </MusicContent>
  );
};

export default Music;
