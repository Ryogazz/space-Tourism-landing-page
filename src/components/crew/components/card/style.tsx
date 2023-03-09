import { motion } from "framer-motion";
import styled from "styled-components";

export const Background = styled.div`
  background-color: "transparent";
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Title = styled.div`
  height: 34px;
  left: 14.14%;
  right: 1.57%;
  top: calc(50% - 34px / 2);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;

  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 170px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 38px;
    margin-top: 40px;
  }
`;

export const TitleNumber = styled.strong`
  color: #ffffff;
  opacity: 25%;
`;

export const TitleText = styled.div`
  height: 37px;
  left: 165.5px;
  margin-bottom: 20px;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;

  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 64px;
  left: 165.5px;
  margin-bottom: 20px;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.div`
  width: 444px;
  height: 128px;
  left: 165px;
  top: 543px;

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 150px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 10px;
`;

export const Image = styled.img`
  position: fixed;
  bottom: 0;
  right: 10%;
  height: calc(100vh - 230px);

  @media (max-width: 821px) {
    position: static;
    margin-top: 20px;
    width: 100%;
    height: 223px;
    object-fit: contain;
  }
`;
export const ImageAndTextContainer = styled.div`
  justify-content: space-around;
  margin-left: 165px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }
`;
