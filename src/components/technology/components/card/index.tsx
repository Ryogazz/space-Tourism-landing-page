import { useState } from "react";
import CardMenu from "../cardMenu";
import * as S from "./style";
import technology from "../../../../utils/data.json";

const Card = () => {
  const [selected, setSelected] = useState(1);

  const technologyData = technology.technology;

  const technologyDataInfo = () => {
    if (selected === 1) {
      return (
        <>
          <S.SubTitleText>{technologyData[0].name}</S.SubTitleText>
          <S.Text>{technologyData[0].description}</S.Text>
        </>
      );
    } else if (selected === 2) {
      return (
        <>
          <S.SubTitleText>{technologyData[1].name}</S.SubTitleText>
          <S.Text>{technologyData[1].description}</S.Text>
        </>
      );
    } else if (selected === 3) {
      return (
        <>
          <S.SubTitleText>{technologyData[2].name}</S.SubTitleText>
          <S.Text>{technologyData[2].description}</S.Text>
        </>
      );
    }
  };

  const technologyDataImage = () => {
    let img = {
      portrait: "",
      landscape: "",
    };
    if (selected === 1) {
      img.landscape = technologyData[0].images.landscape;
      img.portrait = technologyData[0].images.portrait;
    } else if (selected === 2) {
      img.landscape = technologyData[1].images.landscape;
      img.portrait = technologyData[1].images.portrait;
    } else if (selected === 3) {
      img.landscape = technologyData[2].images.landscape;
      img.portrait = technologyData[2].images.portrait;
    }
    return img;
  };

  return (
    <S.Container>
      <S.Title>
        <S.TitleNumber>03</S.TitleNumber> SPACE LAUNCH 101
      </S.Title>
      <S.ContainertMenuAndTextAndImg>
        <S.ContainerMenuText>
          <CardMenu setSelected={setSelected} selected={selected} />
          <S.TextContainer>
            <S.TitleText>THE TERMINOLOGY…</S.TitleText>
            {technologyDataInfo()}
          </S.TextContainer>
        </S.ContainerMenuText>
        <S.Img
          landscape={technologyDataImage().landscape}
          portrait={technologyDataImage().portrait}
        />
      </S.ContainertMenuAndTextAndImg>
    </S.Container>
  );
};

export default Card;
