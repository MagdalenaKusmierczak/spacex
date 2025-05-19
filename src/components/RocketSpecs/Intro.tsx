import { useRocketContext } from "../RocketProvider/RocketProvider";
import { IntroWrapper, PrimaryHeader, Description } from "./RocketSpecs.styled";

export const Intro = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <IntroWrapper>
      <PrimaryHeader>{rocket.name}</PrimaryHeader>
      <Description>{rocket.description}</Description>
    </IntroWrapper>
  );
};
