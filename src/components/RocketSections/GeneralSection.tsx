import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SectionWrapper } from "./RocketSections.styled";


const GeneralSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="general information">
      {setParagraph("Rocket type", rocket.type)}
      {setParagraph("First flight", rocket.first_flight)}
      {setParagraph("Company", rocket.company)}
      {setParagraph("Country", rocket.country)}
      {setParagraph("Number of stages", rocket.stages)}
      {setParagraph("Number of boosters", rocket.boosters)}
      {setParagraph("Cost per launch", rocket.cost_per_launch)}
      {setParagraph("Success rate", rocket.success_rate_pct)}
      {setParagraph("Active", rocket.active.toString())}
    </SectionWrapper>
  );
};

export default GeneralSection;
