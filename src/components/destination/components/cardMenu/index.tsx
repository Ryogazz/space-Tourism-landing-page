import * as S from "./style";

interface CardMenuProps {
  setPlanet: (planet: string) => void;
  planet: string;
}
const CardMenu = ({setPlanet, planet}: CardMenuProps) => {

  return (
    <S.Container>
      <S.Bar>
        <S.Link planet={planet === 'moon'} onClick={() => setPlanet('moon')}>
          MOON
        </S.Link>
        <S.Link planet={planet === 'mars'} onClick={() => setPlanet('mars')}>
          MARS
        </S.Link>
        <S.Link planet={planet === 'europa'} onClick={() => setPlanet('europa')}>
          EUROPA
        </S.Link>
        <S.Link  planet={planet === 'titan'} onClick={() => setPlanet('titan')}>
          TITAN
        </S.Link>
      </S.Bar>
    </S.Container>
  );
};

export default CardMenu;
