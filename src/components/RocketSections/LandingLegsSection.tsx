import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SectionWrapper } from "./RocketSections.styled";

export const LandingLegsSection: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph("Material", rocket.landing_legs.material)}
    </SectionWrapper>
  );
};
