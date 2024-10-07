import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SectionWrapper } from "./RocketSections.styled";

const LandingLegsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  console.log(rocket);
  return (
    <SectionWrapper id="landing legs">
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph(
        "Material",
        rocket.landing_legs.material
      )}
    </SectionWrapper>
  );
};

export default LandingLegsSection;
