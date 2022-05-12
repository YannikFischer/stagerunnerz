import styled from "styled-components";

export const AboutContent = styled.div`
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

export const AboutH1 = styled.h1`
  color: #1c1c1c;
  font-size: 50px;
  bottom: 0;
  overflow: hidden;
  text-align: center;
`;

export const AboutP = styled.p`
  margin-top: 50px;
  color: #1c1c1c;
  font-size: 28px;
  text-align: center;
  width: 50%;
  margin-left: 25%;
`;

export const AboutTextWrapper = styled.div`
  width: 40%;
`;

export const AboutImg = styled.div`
  bottom: 0;
  width: 33%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImageAbout = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
