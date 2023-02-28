import NavBar from '../navBar';
import * as S from "./style";

const Home = () => {
  return (
    <S.Background>
      <NavBar/>
      <S.TextAndCircle>
        <S.Container>
          <S.Heading5>SO, YOU WANT TO TRAVEL TO</S.Heading5>
          <S.Heading1>SPACE</S.Heading1>
          <S.BodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </S.BodyText>
        </S.Container>
        <S.Circle>
          <S.TextCircle>Explorer</S.TextCircle>
        </S.Circle>
      </S.TextAndCircle>
    </S.Background>
  );
};

export default Home;
