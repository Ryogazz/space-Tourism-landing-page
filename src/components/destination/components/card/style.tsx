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
  @media (max-width: 375px) {
    text-align: center;
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
  @media (max-width: 375px) {
    font-size: 16px;
    margin-top: 34px;
    margin-left: 0;
  }
`;

export const TitleNumber = styled.strong`
  color: #ffffff;
  opacity: 25%;
`;

export const ImgAndText = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 445px;
  height: 445px;
  margin-top: 96px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 23px;
  }
  @media (max-width: 375px) {
    width: 170px;
    height: 170px;
    margin-top: 32px;
    margin-bottom: 26px;
  }
`;

export const TextArea = styled.div`
  width: 445px;
  height: 472px;
  margin-top: 70px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    height: 0;
    text-align: center;
    width: 300px;
  }
`;

export const TitleText = styled.div`
  height: 115px;
  left: 0.11%;
  right: 25.06%;
  top: calc(50% - 115px / 2 - 107.5px);
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 80px;
  }
  @media (max-width: 375px) {
    font-size: 56px;
    width: 187px;
    height: 64px;
    top: 20px;
  }
`;
export const Text = styled.div`
  height: 128px;
  left: 0%;
  right: 0.22%;
  top: calc(50% - 128px / 2 + 28px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    width: 327px;
    height: 125px;
    font-size: 15px;
    margin-top: 30px;
  }
`;
export const Line = styled.div`
  height: 1px;
  background: #383b4b;
  mix-blend-mode: normal;
  opacity: 0.25;
  margin-top: 60px;
  position: relative;
  margin-bottom: 30px;
`;

export const TextDistance = styled.div`
  height: 17px;
  left: 0%;
  right: 32.17%;
  top: calc(50% - 17px / 2 - 22px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 2.3625px;
  text-transform: uppercase;

  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TextDistanceNumber = styled.div`
  height: 32px;
  left: 0%;
  right: 0%;
  margin-top: 10px;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;

  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TextAndNumber = styled.div`
  left: 0.11%;
  right: 67.75%;
  top: 87.08%;
`;

export const TravelTimeText = styled.div`
  height: 17px;
  left: 0%;
  right: 3.28%;
  top: calc(50% - 17px / 2 - 22px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 2.3625px;
  text-transform: uppercase;

  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TravelTimeNumber = styled.div`
  height: 32px;
  left: 0%;
  right: 16.39%;
  margin-top: 10px;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;

  text-transform: uppercase;
  color: #d0d6f9;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TextAndTime = styled.div`
  left: 49.78%;
  right: 22.81%;
  top: 87.08%;
  bottom: 0%;
  margin-left: 80px;
  @media (max-width: 375px) {
    margin-left: 0px;
    margin-top: 32px;
  }
`;

export const DistanceAndTravel = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;
