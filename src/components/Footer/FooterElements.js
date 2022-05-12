import styled from "styled-components";

export const FooterContainer = styled.div`
  z-index: 3;
  width: 100%;
  height: 225px;
  position: relative;
  align-items: center;
  background: #1e2121;

  @media screen and (max-width: 1380px) {
    height: 500px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1380px) {
    flex-direction: column;
    postition: absolute;
    top: 25%;
  }
`;

export const FooterBox = styled.div`
  width: 15%;
  margin-top: 50px;
  height: 100px;
  position: relative;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1380px) {
    margin-top: 30px;
    height: 150px;
    width: 100%;
  }
`;

export const FooterTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  color: #fff;
`;

export const FooterText = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1380px) {
    width: 25%;
    align-items: center;
    justify-content: space-around;
    margin-left: 38%;
  }
`;

export const Icon = styled.img`
  width: 15%;
  height: 15%;
  cursor: pointer;

  @media screen and (max-width: 1380px) {
    height: 20%;
    width: 20%;
  }
`;
