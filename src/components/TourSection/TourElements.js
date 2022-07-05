import styled from "styled-components";

export const TourContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(0deg, #b3b3b3, #666);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 1200px;
  }
`;

export const TourImg = styled.div`
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

export const ImageTour = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const TourDatesContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const TourDateBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 22px;
  border-bottom: 1px solid #bfbfbf;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 5%;
    margin-right: 5%;
    width: 80%;
    display: block;
  }
`;

export const TourDate = styled.div`
  width: 25%;
`;

export const TourLocation = styled.div`
  width: 45%;
`;

export const TourLocationCity = styled.div`
  width: 30%;
`;

export const TourH1 = styled.h1`
  color: #1c1c1c;
  font-size: 65px;
  text-align: center;
`;
