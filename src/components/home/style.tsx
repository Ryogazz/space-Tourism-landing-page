import styled from "styled-components";
import background from "../../assets/home/background-home-desktop.jpg";
import backgroundTablet from "../../assets/home/background-home-tablet.jpg";
import backgroundMobile from "../../assets/home/background-home-mobile.jpg";

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    background-image: url(${backgroundTablet});
  }
  @media (max-width: 3758px) {
    background-image: url(${backgroundMobile});
  }
`;

export const Heading1 = styled.h1`
  font-family: "Bellefair";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
`;
export const Heading5 = styled.div`
  font-family: "Barlow Condensed";
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 3.72px;
  text-align: left;
  color: #ffffff;
  height: 34px;
  width: 379px;
  left: 0.5px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 24px;
  }


`;

export const BodyText = styled.p`
  color: #ffffff;
  height: 128px;
  left: 0.11%;
  right: 1.22%;
  top: calc(50% - 128px / 2 + 127px);

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;


  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  width: 450px;
  height: 382px;
  top: 387px;

  //criar um media query para mobile
  @media (max-width: 768px) {
    height: 334px;
  }

`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  width: 274px;
  height: 274px;
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

export const TextCircle = styled.div`
  height: 37px;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #0b0d17;
  text-transform: uppercase;

`;

export const TextAndCircle = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100% - (96px + 40px));
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: calc(100% - (96px + 40px));
  }

`;

