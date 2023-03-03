import * as S from "./style";

interface CardMenuProps {
  setSelected: (selected: number) => void;
  selected: number;
}

const CardMenu = ({ setSelected, selected }: CardMenuProps) => {

  return (
    <S.MenuContainer>
      <S.MenuIcon active={selected === 1} onClick={() => setSelected(1)} >
        1
      </S.MenuIcon>
      <S.MenuIcon active={selected === 2} onClick={() => setSelected(2)} >
        2
      </S.MenuIcon>
      <S.MenuIcon  active={selected === 3} onClick={() => setSelected(3)}>
        3
      </S.MenuIcon>
    </S.MenuContainer>
  )
};

export default CardMenu;
