import styled from "styled-components";

export const MerchContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(#ececec, #666); ;
`;

export const MerchH1 = styled.h1`
  color: #1c1c1c;
  font-size: 40px;
  bottom: 0;
  margin-top: 30px;
  overflow: hidden;
`;

export const MerchImg = styled.div`
  /* bottom: 0; */
  /* width: 33%; */
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;

export const ImageMerch = styled.img`
  width: 80%;
  height: 60%;
  -o-object-fit: cover;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MerchBtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
