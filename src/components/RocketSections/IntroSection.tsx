import { FC } from "react";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  IntroWrapper,
  FirstHeader,
  Description,
} from "./RocketSections.styled";

export const IntroSection: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const rocket = rocketData;

  return (
    <IntroWrapper>
      <FirstHeader>{rocket.name}</FirstHeader>
      <Description>{rocket.description}</Description>
    </IntroWrapper>
  );
};
