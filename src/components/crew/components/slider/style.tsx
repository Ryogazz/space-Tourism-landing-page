import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  width: 132px;
  height: 15px;
`;
export const SliderIcon = styled.button<{ active: boolean }>`
  background: none;
  border-radius: 50%;
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: #ffffff;
  opacity: 0.5;
  border: none;
  &:hover {
    opacity: 1;
  }
  &:not(:last-child) {
    margin-right: 24px;
  }
  ${({ active }) => active && `opacity: 1;`}

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;
