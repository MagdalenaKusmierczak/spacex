import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SecondHeader, Summary } from "./RocketSections.styled";

const LandingLegsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
      <section><details>
        <Summary><SecondHeader>Landing legs</SecondHeader></Summary>
        {setParagraph("Number of legs", rocket.landing_legs.number)}
        {setParagraph("Material", rocket.landing_legs.material)}</details>
      </section>

  );
};

export default LandingLegsSection;
