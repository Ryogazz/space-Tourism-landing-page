import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
`;

export const ContainertMenuAndTextAndImg = styled.div`
  justify-content: flex-end;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerMenuText = styled.div`
  display: flex;
  margin-left: 165px;
  justify-content: center;
  align-items: center;
`

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
`;

export const Img = styled.img`
  width: 515px;
  height: 100%;
  left: 925px;
`;
