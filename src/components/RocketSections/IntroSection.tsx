import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { IntroWrapper,FirstHeader, Description } from "./RocketSections.styled";

const IntroSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <IntroWrapper>
      <FirstHeader>{rocket.rocket_name}</FirstHeader>
      <Description>{rocket.description}</Description>
    </IntroWrapper>
  );
};

export default IntroSection;
