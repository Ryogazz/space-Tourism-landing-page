import { useState } from "react";
import Slider from "../slider";
import * as S from "./style";
import crew from "../../../../utils/data.json";
import { useAnimationControls, motion } from "framer-motion";

const Card = () => {
  const [active, setActive] = useState<number>(1);

  const crewData = crew.crew;
  console.log(crewData);

  const crewDataInfo = () => {
    if (active === 1) {
      return (
        <>
          <S.TitleText>{crewData[0].role}</S.TitleText>
          <S.Name>{crewData[0].name}</S.Name>
          <S.Description>{crewData[0].bio}</S.Description>
        </>
      );
    } else if (active === 2) {
      return (
        <>
          <S.TitleText>{crewData[1].role}</S.TitleText>
          <S.Name>{crewData[1].name}</S.Name>
          <S.Description>{crewData[1].bio}</S.Description>
        </>
      );
    } else if (active === 3) {
      return (
        <>
          <S.TitleText>{crewData[2].role}</S.TitleText>
          <S.Name>{crewData[2].name}</S.Name>
          <S.Description>{crewData[2].bio}</S.Description>
        </>
      );
    } else {
      return (
        <>
          <S.TitleText>{crewData[3].role}</S.TitleText>
          <S.Name>{crewData[3].name}</S.Name>
          <S.Description>{crewData[3].bio}</S.Description>
        </>
      );
    }
  };

  const crewDataImage = () => {
    if (active === 1) {
      return crewData[0].images.png;
    } else if (active === 2) {
      return crewData[1].images.png;
    } else if (active === 3) {
      return crewData[2].images.png;
    } else {
      return crewData[3].images.png;
    }
  };
  const textAnimation = useAnimationControls();
  const imageAnimatiou = useAnimationControls();

  return (
    <S.Background>
      <S.Container>
        <S.Title>
          <S.TitleNumber>02</S.TitleNumber> MEET YOUR CREW
        </S.Title>
        <S.ImageAndTextContainer>
          <motion.div transition={{ duration: 0.2 }} animate={imageAnimatiou}>
            <S.Image src={crewDataImage()} />
          </motion.div>
            <S.SliderContainer>
              <Slider
                setActive={setActive}
                active={active}
                textAnimation={textAnimation}
                imageAnimation={imageAnimatiou}
              />
            </S.SliderContainer>
          <S.DescriptionContainer>
            <motion.div transition={{ duration: 0.2 }} animate={textAnimation}>
              {crewDataInfo()}
            </motion.div>
          </S.DescriptionContainer>
        </S.ImageAndTextContainer>
      </S.Container>
    </S.Background>
  );
};

export default Card;
