import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";

export const LandingLegs: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <>
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph("Material", rocket.landing_legs.material)}
    </>
  );
};
