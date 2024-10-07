import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const LandingLegsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  console.log(rocket);
  return (
    <section id="landing legs">
      {setParagraph("Number of legs", rocket.landing_legs.number)}
      {setParagraph(
        "Material",
        rocket.landing_legs.material !== null
          ? rocket.landing_legs.material
          : "Unknown"
      )}
    </section>
  );
};

export default LandingLegsSection;
