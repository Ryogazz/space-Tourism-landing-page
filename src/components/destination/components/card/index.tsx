import * as S from "./styled";
import CardMenu from "../cardMenu";
import { useState } from "react";

const Card = () => {
  const [planet, setPlanet] = useState<string>("moon");

  const planetImg = () => {
    let img = "";
    if (planet === "moon") {
      img = "/destination/image-moon.png";
    } else if (planet === "mars") {
      img = "/destination/image-mars.png";
    } else if (planet === "europa") {
      img = "/destination/image-europa.png";
    } else if (planet === "titan") {
      img = "/destination/image-titan.png";
    }
    return img;
  };

  const planetText = () => {
    let text = "";
    if (planet === "moon") {
      text = `See our planet as you’ve never seen it before. 
      A perfect relaxing trip away to help regain perspective and come back refreshed.
      While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
    } else if (planet === "mars") {
      text = `Don’t forget to pack your hiking boots. 
        You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
        It’s two and a half times the size of Everest!`;
    } else if (planet === "europa") {
      text = `The smallest of the four Galilean moons orbiting Jupiter, 
        Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
        curling, hockey, or simple relaxation in your snug wintery cabin.`;
    } else if (planet === "titan") {
      text = `The only moon known to have a dense atmosphere other than Earth, 
        Titan is a home away from home (just a few hundred degrees colder!). 
        As a bonus, you get striking views of the Rings of Saturn.`;
    }
    return text;
  };

  const planetDistance = () => {
    let distance = "";
    if (planet === "moon") {
      distance = "384,400 km";
    } else if (planet === "mars") {
      distance = "225 MIL. km";
    } else if (planet === "europa") {
      distance = "628 MIL. kmm";
    } else if (planet === "titan") {
      distance = "1.6 BIL. km";
    }
    return distance;
  };

  const planetTravelTime = () => {
    let time = "";
    if (planet === "moon") {
      time = "3 days";
    } else if (planet === "mars") {
      time = "9 months";
    } else if (planet === "europa") {
      time = "3 years";
    } else if (planet === "titan") {
      time = "7 years";
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
