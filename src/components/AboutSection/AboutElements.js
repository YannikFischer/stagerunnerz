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
  background: linear-gradient(0deg, #666, #b3b3b3);

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 2400px;
    width: 100%;
  }
`;

export const AboutH1 = styled.h1`
  color: #1c1c1c;
  font-size: 50px;
  bottom: 0;
  overflow: hidden;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-top: 75px;
  }
`;

export const AboutP = styled.p`
  margin-top: 50px;
  color: #1c1c1c;
  font-size: 28px;
  text-align: center;
  width: 50%;
  margin-left: 25%;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const AboutTextWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 1000px) {
    height: 50%;
    margin-bottom: 25px;
    width: 100%;
  }
`;

export const AboutImg = styled.div`
  bottom: 0;
  width: 33%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    /* height: 85%; */
    width: 100%;
  }
`;

export const ImageAbout = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
