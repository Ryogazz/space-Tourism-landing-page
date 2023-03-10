import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  background-color: "transparent";
  height: 34px;
  width: 285.5px;

  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 285.5px;
    height: 34px;
  }
  @media (max-width: 375px) {
    width: 237.5px;
    height: 28px;
  }
`;

export const Link = styled.div<{ planet: boolean }>`
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px -2px 0px #fff;
  }
  ${({ planet }) => planet && `box-shadow: inset 0px -2px 0px #fff;`}
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
