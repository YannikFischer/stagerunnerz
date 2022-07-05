import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 380px) {
    height: 300px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${fadeInAnimation} ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  opacity: 0;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
    height: 100%;
  }
`;
