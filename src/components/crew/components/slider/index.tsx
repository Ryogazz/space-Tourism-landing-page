import { AnimationControls, useAnimationControls } from 'framer-motion';
import * as S from './style';

interface SliderProps {
  active: number;
  setActive: (active: number) => void;
  textAnimation: AnimationControls;
  imageAnimation: AnimationControls;
}

const Slider = ({setActive, active, textAnimation, imageAnimation}: SliderProps) => {


  function handleMouseEnter(number: number) {
    textAnimation.start({
      x: -2000,
    });
    imageAnimation.start({
      opacity: 0,
    });
    setTimeout(() => {
      textAnimation.start({
        x: 0,
      })
      imageAnimation.start({
        opacity: 1,
        });
      setActive(number);
    },500);
  }

  return (
      <S.SliderContainer>
        <S.SliderIcon active={active === 1} onClick={() => handleMouseEnter(1)}/>
        <S.SliderIcon active={active === 2} onClick={() => handleMouseEnter(2)}/>  
        <S.SliderIcon active={active === 3} onClick={() => handleMouseEnter(3)}/>  
        <S.SliderIcon active={active === 4} onClick={() => handleMouseEnter(4)}/>  
      </S.SliderContainer>
    );
};

export default Slider;
