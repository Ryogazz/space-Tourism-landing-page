import { useState } from 'react';
import * as S from "./style";

interface CardMenuProps {
  setPlanet: (planet: string) => void;
}
const CardMenu = ({setPlanet}: CardMenuProps) => {

  return (
    <S.Container>
      <S.Bar>
        <S.Link onClick={() => setPlanet('moon')}>
          MOON
        </S.Link>
        <S.Link onClick={() => setPlanet('mars')}>
          MARS
        </S.Link>
        <S.Link onClick={() => setPlanet('europa')}>
          EUROPA
        </S.Link>
        <S.Link onClick={() => setPlanet('titan')}>
          TITAN
        </S.Link>
      </S.Bar>
    </S.Container>
  );
};

export default CardMenu;
