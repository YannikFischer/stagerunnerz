import styled from "styled-components";

export const TourContent = styled.div`
  display: flex;
  z-index: 3;
  width: 100%;
  height: 800px;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: radial-gradient(#ececec, #666); ;
`;

export const TourImg = styled.div`
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 100%;
  overflow: hidden;
`;

export const ImageTour = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const TourDatesContainer = styled.div`
  width: 40%;
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
  /* 
  &:first-child {
    margin-top: 30%;
  } */
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
