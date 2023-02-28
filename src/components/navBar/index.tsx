import { NavLink } from "react-router-dom";
import * as S from "./style";

const NavBar = () => {
  const active = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? {
          boxShadow: "inset 0px -2px 0px #fff",
        }
      : undefined;
  };

  return (
    <S.Container>
      <S.Img/>
      <S.Line/>
      <S.Bar>
        <NavLink to="/" style={active}>
          <S.Numbers>00</S.Numbers>HOME
        </NavLink>
        <NavLink to="/destination" style={active}>
          <S.Numbers>01</S.Numbers>DESTINATION
        </NavLink>
        <NavLink to="/crew" style={active}>
          <S.Numbers>02</S.Numbers>CREW
        </NavLink>
        <NavLink to="/technology" style={active}>
          <S.Numbers>03</S.Numbers>TECHNOLOGY
        </NavLink>
      </S.Bar>
    </S.Container>
  );
};

export default NavBar;
