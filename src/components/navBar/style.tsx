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

  @media (max-width: 768px) {
    width: 450px;
    height: 96px;
  }
`;
export const Numbers = styled.strong`
  font-weight: bold;
  margin-right: 8px;
`;

export const Img = styled.div`
  background-image: url(${img});
  background-size: contain;
  width: 48px;
  height: 48px;
  margin-left: 40px;
`;

export const ImgMobile = styled.div`
  background-image: url(${img});
  background-size: contain;
  width: 40px;
  height: 40px;
  margin-top: 24px;
  margin-left: 24px;
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    display: none;
    margin-top: 0;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

interface isVisible {
  isVisible: boolean;
}

export const MenuIcon = styled.div<isVisible>`
  display: none;
  @media (max-width: 480px) {
    ${({ isVisible }) => !isVisible  && `display: block;`}
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.04);
    position: fixed;
    top: 0;
    width: 254px;
    height: 100%;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    > svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
    a {
      color: white;
      text-decoration: none;
      width: 130px;
      height: 19px;
      display: flex;
      align-items: center;
    }
  }
`;
