import styled from "styled-components";
import img from "../../assets/shared/logo.svg";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.04);
  height: 96px;
  width: 830px;
  justify-content: space-evenly;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const Numbers = styled.strong`
  font-weight: bold;
  margin-right: 8px;
`;
export const Img = styled.div`
  background-image: url(${img});
  width: 48px;
  height: 48px;
  margin-left: 40px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;
export const Line = styled.div`
  width: calc(100% - 910px);
  height: 1px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  left: 70px;
  position: relative;
  z-index: 1;
`;
