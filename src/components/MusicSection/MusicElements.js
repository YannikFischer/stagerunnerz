import styled from "styled-components";

export const MainContent = styled.div``;

export const MusicContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: radial-gradient(#ececec, #666);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 1200px;
  }
`;

export const MusicH1 = styled.h1`
  color: #1c1c1c;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 1380px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
`;

export const MusicP = styled.p`
  margin-top: 30px;
  color: #1c1c1c;
  font-size: 28px;
  text-align: center;
  width: 50%;
  margin-left: 25%;

  @media screen and (max-width: 1380px) {
    width: 80%;
    margin-left: 10%;
    font-size: 25px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-left: 0%;
    font-size: 25px;
  }
`;

export const MusicBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MusicImg = styled.div`
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ImageMusic = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const MusicTextWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 1000px) {
    width: 60%;
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    margin-top: 30px;
  }
`;

export const SecondMusicContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: radial-gradient(#ececec, #666);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 1200px;
    background: linear-gradient(0deg, #666, #b3b3b3);
  }
`;

export const SecondMusicH1 = styled.h1`
  color: #1c1c1c;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 1380px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
`;

export const SecondMusicP = styled.p`
  margin-top: 30px;
  color: #1c1c1c;
  font-size: 28px;
  text-align: center;
  width: 50%;
  margin-left: 25%;

  @media screen and (max-width: 1380px) {
    width: 80%;
    margin-left: 10%;
    font-size: 25px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-left: 0%;
    font-size: 25px;
  }
`;

export const SecondMusicBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1380px) {
    margin-bottom: 40px;
  }
`;

export const SecondMusicImg = styled.div`
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

// export const ImageMusic = styled.img`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
// `;

export const SecondMusicTextWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 1000px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
