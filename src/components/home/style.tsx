import styled from "styled-components";

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
  position: absolute;
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
  position: absolute;
  width: 450px;
  height: 382px;
  left: 165px;
  top: 387px;
`;

export const Circle = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  width: 274px;
  height: 274px;
  left: 1301px;
  top: 495px;
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

export const TextCircle = styled.div`
  position: absolute;
  height: 37px;
  width: 148px;
  top: 119px;
  left: 27.63%;
  right: 23.36%;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;

  color: #0b0d17;
`;
