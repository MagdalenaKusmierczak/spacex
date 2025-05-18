import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SectionWrapper } from "./RocketSections.styled";

export const GeneralInfo: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
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
