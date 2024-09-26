import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const LandingLegsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
      <div>
        <h3>Landing legs</h3>
        {setParagraph("Number of legs", rocket.landing_legs.number)}
        {setParagraph("Material", rocket.landing_legs.material)}
      </div>

  );
};

export default LandingLegsSection;
