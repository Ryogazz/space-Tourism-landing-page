import styled from "styled-components";
import background from "../../assets/home/background-home-desktop.jpg";

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
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
`;

export const Container = styled.div`
  width: 450px;
  height: 382px;
  /* left: 165px; */
  top: 387px;
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
`;
