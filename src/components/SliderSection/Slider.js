import React, { useState } from "react";

import { SliderContent, ImageContainer } from "./SliderElements";

const Slider = (config) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <SliderContent>
      <ImageContainer src={config[imageIndex].image} />
    </SliderContent>
  );
};

export default Slider;
