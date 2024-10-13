import { FC } from "react";
import setParagraph from "../../utils/setParagraph";
import Rocket from "../../service/interfaces/RocketInterface";
import { SectionWrapper } from "./RocketSections.styled";

const LandingLegsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;

  return (
    <SectionWrapper>
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph("Material", rocket.landing_legs.material)}
    </SectionWrapper>
  );
};

export default LandingLegsSection;
