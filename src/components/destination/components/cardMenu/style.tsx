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
`;

export const Link = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px -2px 0px #fff;
  }

`