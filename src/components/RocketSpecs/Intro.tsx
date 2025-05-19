import { FC } from "react";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { IntroWrapper, PrimaryHeader, Description } from "./RocketSpecs.styled";

export const Intro: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <IntroWrapper>
      <PrimaryHeader>{rocket.name}</PrimaryHeader>
      <Description>{rocket.description}</Description>
    </IntroWrapper>
  );
};
