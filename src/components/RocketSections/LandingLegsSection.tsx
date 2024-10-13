import { FC } from "react";
import setParagraph from "utils/setParagraph";
import Rocket from "service/types/RocketInterface";
import { SectionWrapper } from "./RocketSections.styled";

const LandingLegsSection: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const rocket = rocketData;

  return (
    <SectionWrapper>
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph("Material", rocket.landing_legs.material)}
    </SectionWrapper>
  );
};

export default LandingLegsSection;
