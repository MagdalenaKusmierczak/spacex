import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SecondaryHeader } from "./RocketSpecs.styled";

export const LandingLegs: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <>
      <SecondaryHeader>Landing legs</SecondaryHeader>
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph("Material", rocket.landing_legs.material)}
    </>
  );
};
