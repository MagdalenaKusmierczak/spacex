import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SecondHeader,Summary } from "./RocketSections.styled";

const GeneralSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <details>
        <Summary>
          <SecondHeader>General information</SecondHeader>
        </Summary>
        {setParagraph("Rocket type", rocket.rocket_type)}
        {setParagraph("Active", (rocket.active).toString())}
        {setParagraph("Number of stages", rocket.stages)}
        {setParagraph("Number of boosters", rocket.boosters)}
        {setParagraph("Cost per launch", rocket.cost_per_launch)}
        {setParagraph("Success rate", rocket.success_rate_pct)}
        {setParagraph("First flight", rocket.first_flight)}
        {setParagraph("Country", rocket.country)}
        {setParagraph("Company", rocket.company)}
      </details>
    </section>
  );
};

export default GeneralSection;
