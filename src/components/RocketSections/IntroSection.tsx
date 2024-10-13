import { FC } from "react";
import Rocket from "../../service/interfaces/RocketInterface";
import {
  IntroWrapper,
  FirstHeader,
  Description,
} from "./RocketSections.styled";

const IntroSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <IntroWrapper>
      <FirstHeader>{rocket.name}</FirstHeader>
      <Description>{rocket.description}</Description>
    </IntroWrapper>
  );
};

export default IntroSection;
