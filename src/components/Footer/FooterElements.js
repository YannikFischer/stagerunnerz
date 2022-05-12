import styled from "styled-components";

export const FooterContainer = styled.div`
  z-index: 3;
  width: 100%;
  height: 225px;
  position: relative;
  align-items: center;
  background: #1e2121;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterBox = styled.div`
  width: 15%;
  margin-top: 50px;
  height: 100px;
  position: relative;
  /* display: flex;
  flex-direction: column; */
  align-items: center;
  justify-content: center;
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
`;

export const Icon = styled.img`
  width: 20%;
  height: 20%;
  cursor: pointer;
`;
