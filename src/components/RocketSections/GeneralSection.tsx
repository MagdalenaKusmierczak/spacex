import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const GeneralSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <h1>{rocket.rocket_name}</h1>
      <h2>{rocket.description}</h2>
      <div>
        <h3>General information</h3>
        {setParagraph("Rocket type", rocket.rocket_type)}
        {setParagraph("Active", rocket.active)}
        {setParagraph("Number of stages", rocket.stages)}
        {setParagraph("Number of boosters", rocket.boosters)}
        {setParagraph("Cost per launch", rocket.cost_per_launch)}
        {setParagraph("Success rate", rocket.success_rate_pct)}
        {setParagraph("First flight", rocket.first_flight)}
        {setParagraph("Country", rocket.country)}
        {setParagraph("Company", rocket.company)}
      </div>
    </section>
  );
};

export default GeneralSection;
