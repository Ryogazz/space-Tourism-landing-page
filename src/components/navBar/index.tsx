import { useEffect, useRef, useState } from "react";
import { NavLink, useHref } from "react-router-dom";
import * as S from "./style";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  // verificar se clicou fora do menu com useRef
  //tipar o useRef com o tipo do elemento que ele vai receber
  const ref = useRef<HTMLDivElement>(null);

  const active = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? {
          boxShadow: "inset 0px -2px 0px #fff",
        }
      : undefined;
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <>
        <S.ImgMobile />
        <S.MenuIcon isVisible={menuOpen}>
          <RiMenu3Fill
            size={40}
            color={"white"}
            onClick={() => setMenuOpen(true)}
          />
        </S.MenuIcon>
        {menuOpen && (
          <S.MenuMobile ref={ref}>
            <IoClose
              size={40}
              color={"white"}
              onClick={() => setMenuOpen(false)}
            />
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
          </S.MenuMobile>
        )}
      </>

      <>
        <S.Container>
          <S.Img />
          <S.Line />
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
      </>
    </>
  );
};

export default NavBar;
