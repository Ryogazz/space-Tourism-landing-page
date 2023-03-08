import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 132px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 300px;
  }
`;
export const MenuIcon = styled.button<{ active: boolean }>`
  border-radius: 50%;
  cursor: pointer;
  width: 80px;
  height: 80px;
  background: transparent;
  margin-bottom: 32px;

  ${({ active }) =>
    active
      ? `
    background: #ffffff;
    color: #000000;
    `
      : `
    background: transparent;
    color: #ffffff;
    `}

  border: 1px solid #ffffff;
  &:active {
    border-style: outset;
    border: 1px solid #ffffff;
  }

  font-size: 28px;
  font-family: "'Bellefair'";

  @media (max-width: 768px) {
    margin-right: 16px;
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`;
