import styled from "styled-components";

export const SecondMusicContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: radial-gradient(#ececec, #666); ;
`;

export const SecondMusicH1 = styled.h1`
  color: #1c1c1c;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 380px) {
    font-size: 32px;
  }
`;

export const SecondMusicP = styled.p`
  margin-top: 30px;
  color: #1c1c1c;
  font-size: 28px;
  text-align: center;
  width: 50%;
  margin-left: 25%;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;

export const SecondMusicBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecondMusicImg = styled.div`
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 100%;
  overflow: hidden;
`;

export const ImageMusic = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SecondMusicTextWrapper = styled.div`
  width: 40%;
`;
