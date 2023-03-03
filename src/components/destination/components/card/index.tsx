import * as S from "./style";
import CardMenu from "../cardMenu";
import { useState } from "react";
import destinations from "../../../../utils/data.json";

const Card = () => {
  const [planet, setPlanet] = useState<string>("moon");

  const planetData = destinations.destinations;

  const planetImg = () => {
    let img = "";
    if (planet === "moon") {
      img = planetData[0].images.png;
    } else if (planet === "mars") {
      img = planetData[1].images.png;
    } else if (planet === "europa") {
      img = planetData[2].images.png;
    } else if (planet === "titan") {
      img = planetData[3].images.png;
    }
    return img;
  };

  const planetText = () => {
    let text = "";
    if (planet === "moon") {
      text = planetData[0].description;
    } else if (planet === "mars") {
      text = planetData[1].description;
    } else if (planet === "europa") {
      text = planetData[2].description;
    } else if (planet === "titan") {
      text = planetData[3].description;
    }
    return text;
  };

  const planetDistance = () => {
    let distance = "";
    if (planet === "moon") {
      distance = planetData[0].distance;
    } else if (planet === "mars") {
      distance = planetData[1].distance;
    } else if (planet === "europa") {
      distance = planetData[2].distance;
    } else if (planet === "titan") {
      distance = planetData[3].distance;
    }
    return distance;
  };

  const planetTravelTime = () => {
    let time = "";
    if (planet === "moon") {
      time = planetData[0].travel;
    } else if (planet === "mars") {
      time = planetData[1].travel;
    } else if (planet === "europa") {
      time = planetData[2].travel;
    } else if (planet === "titan") {
      time = planetData[3].travel;
    }
    return time;
  };

  return (
    <S.Background>
      <S.Container>
        <S.Title><S.TitleNumber>01</S.TitleNumber>  Pick your destination</S.Title>
        <S.ImgAndText>
          <S.Img image={planetImg()} />
          <S.TextArea>
            <CardMenu setPlanet={setPlanet} planet={planet} />
            <S.TitleText>{planet}</S.TitleText>
            <S.Text>{planetText()}</S.Text>
            <S.Line />
            <S.DistanceAndTravel>
              <S.TextAndNumber>
                <S.TextDistance>AVG. DISTANCE</S.TextDistance>
                <S.TextDistanceNumber>{planetDistance()}</S.TextDistanceNumber>
              </S.TextAndNumber>
              <S.TextAndTime>
                <S.TravelTimeText>Est. travel time</S.TravelTimeText>
                <S.TravelTimeNumber>{planetTravelTime()}</S.TravelTimeNumber>
              </S.TextAndTime>
            </S.DistanceAndTravel>
          </S.TextArea>
        </S.ImgAndText>
      </S.Container>
    </S.Background>
  );
};

export default Card;
