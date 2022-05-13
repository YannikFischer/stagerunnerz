import React, { useState } from "react";
import TShirtBlack from "../../images/tshirtblack.png";
import TShirtBlue from "../../images/tshirtblue.png";
import TShirtWhite from "../../images/tshirtwhite.png";
import { Button } from "../ButtonElement";
import {
  MerchContent,
  MerchImg,
  ImageMerch,
  MerchBtnWrapper,
  MerchH1,
} from "./MerchElements";

const Merch = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MerchContent id="merch">
      <MerchImg>
        <ImageMerch src={TShirtBlack} />
        <MerchH1>T-Shirt Black</MerchH1>
        <MerchBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            onClick={() =>
              (window.location =
                "mailto:stagerunnerz@gmail.com?subject=Order Stagerunnerz Merch&body=I would like to order a T-Shirt Black. Size: ---fill in size here---, Quantity: ---fill in quantity here---, Message: ---fill in message here---, and your name: ---fill in name here---")
            }
          >
            Buy
          </Button>
        </MerchBtnWrapper>
      </MerchImg>
      <MerchImg>
        <ImageMerch src={TShirtBlue} />
        <MerchH1>T-Shirt Blue</MerchH1>
        <MerchBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            onClick={() =>
              (window.location =
                "mailto:stagerunnerz@gmail.com?subject=Order Stagerunnerz Merch&body=I would like to order a T-Shirt Blue. Size: ---fill in size here---, Quantity: ---fill in quantity here---, Message: ---fill in message here---, and your name: ---fill in name here---")
            }
          >
            Buy
          </Button>
        </MerchBtnWrapper>
      </MerchImg>
      <MerchImg>
        <ImageMerch src={TShirtWhite} />
        <MerchH1>T-Shirt White</MerchH1>
        <MerchBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            onClick={() =>
              (window.location =
                "mailto:stagerunnerz@gmail.com?subject=Order Stagerunnerz Merch&body=I would like to order a T-Shirt White. Size: ---fill in size here---, Quantity: ---fill in quantity here---, Message: ---fill in message here---, and your name: ---fill in name here---")
            }
          >
            Buy
          </Button>
        </MerchBtnWrapper>
      </MerchImg>
    </MerchContent>
  );
};

export default Merch;
