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
  color: #FFFFFF;
  margin-left: 170px;
`;

export const TitleNumber = styled.strong`
  color: #ffffff;
  opacity: 25%;
`;

export const ImgAndText = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Img = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  width: 445px;
  height: 445px;
  margin-top: 96px;
`;

export const TextArea = styled.div`
  width: 445px;
  height: 472px;
  margin-top: 70px;
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
`;

export const TextAndTime = styled.div`
  left: 49.78%;
  right: 22.81%;
  top: 87.08%;
  bottom: 0%;
  margin-left: 80px;
`;

export const DistanceAndTravel = styled.div`
  display: flex;
  align-items: flex-start;
`;
