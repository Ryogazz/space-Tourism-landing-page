import styled from 'styled-components';
import background from '../../assets/destination/background-destination-desktop.jpg';

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;