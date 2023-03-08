import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const ContainertMenuAndTextAndImg = styled.div`
  justify-content: flex-end;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const ContainerMenuText = styled.div`
  display: flex;
  margin-left: 165px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 58px;
  }
`;

export const Title = styled.div`
  height: 34px;
  left: 14.14%;
  right: 1.57%;

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

export const TextContainer = styled.div`
  width: 470px;
  height: 303px;
  margin-right: 130px;
  margin-left: 80px;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
export const TitleText = styled.div`
  margin-bottom: 11px;
  height: 19px;
  left: 0%;
  right: 68.09%;
  top: calc(50% - 19px / 2 - 142px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;

  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const SubTitleText = styled.div`
  margin-bottom: 17px;
  height: 64px;
  left: 0%;
  right: 0%;
  top: calc(50% - 64px / 2 - 89.5px);

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;

  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Text = styled.div`
  height: 192px;
  left: 0%;
  right: 5.53%;
  top: calc(50% - 192px / 2 + 55.5px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  color: #d0d6f9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

interface ImgProps {
  landscape: string;
  portrait: string;
}
export const Img = styled.div<ImgProps>`
  background-image: url(${(ImgProps) => ImgProps.portrait});
  width: 515px;
  height: 527px;
  left: 925px;

  @media (max-width: 768px) {
    background-image: url(${(ImgProps) => ImgProps.landscape});
    background-repeat: no-repeat;
    width: 768px;
    margin-top: 60px;
    height: 300px;
  }
`;
