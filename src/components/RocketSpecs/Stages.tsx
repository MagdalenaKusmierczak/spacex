import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  StagesList,
  StagesItem,
  SecondHeader,
  ThirdHeader,
  OutsideList,
  StyledParagraph,
} from "./RocketSections.styled";

export const Stages: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <StagesList>
      <StagesItem>
        <SecondHeader>First stage</SecondHeader>
        {setParagraph("Reusable", rocket.first_stage.reusable.toString())}
        {setParagraph("Number of engines", rocket.first_stage.engines)}
        {setParagraph(
          "Fuel amount",
          rocket.first_stage.fuel_amount_tons,
          "tons",
        )}
        {setParagraph("Burn time", rocket.first_stage.burn_time_sec, "seconds")}
        <ThirdHeader>Thrust sea level</ThirdHeader>
        <OutsideList>
          <li>
            {setParagraph(
              "Kilonewtons",
              rocket.first_stage.thrust_sea_level.kN,
              "kN",
            )}
          </li>
          <li>
            {setParagraph(
              "Pound-force",
              rocket.first_stage.thrust_sea_level.lbf,
              "lbf",
            )}
          </li>
        </OutsideList>
        <ThirdHeader>Thrust vacuum</ThirdHeader>
        <OutsideList>
          <li>
            {setParagraph(
              "Kilonewtons",
              rocket.first_stage.thrust_vacuum.kN,
              "kN",
            )}
          </li>
          <li>
            {setParagraph(
              "Pound-force",
              rocket.first_stage.thrust_vacuum.lbf,
              "lbf",
            )}
          </li>
        </OutsideList>
      </StagesItem>
      <StagesItem>
        <SecondHeader>Second stage</SecondHeader>
        {setParagraph("Reusable", rocket.second_stage.reusable.toString())}
        {setParagraph("Number of engines", rocket.second_stage.engines)}
        {setParagraph(
          "Fuel amount",
          rocket.second_stage.fuel_amount_tons,
          "tons",
        )}
        {setParagraph(
          "Burn time",
          rocket.second_stage.burn_time_sec,
          "seconds",
        )}
        <ThirdHeader>Thrust</ThirdHeader>
        <OutsideList>
          <li>
            {setParagraph("Kilonewtons", rocket.second_stage.thrust.kN, "kN")}
          </li>
          <li>
            {setParagraph("Pound-force", rocket.second_stage.thrust.kN, "lbf")}
          </li>
        </OutsideList>
        <ThirdHeader>Payloads</ThirdHeader>
        {setParagraph("First option", rocket.second_stage.payloads.option_1)}
        <ThirdHeader>Composite fairing</ThirdHeader>
        <StyledParagraph>Height</StyledParagraph>
        <OutsideList>
          <li>
            {setParagraph(
              "Meters",
              rocket.second_stage.payloads.composite_fairing.height.meters,
            )}
          </li>
          <li>
            {setParagraph(
              "Feet",
              rocket.second_stage.payloads.composite_fairing.height.feet,
            )}
          </li>
        </OutsideList>
        <StyledParagraph>Diamater</StyledParagraph>
        <OutsideList>
          <li>
            {setParagraph(
              "Meters",
              rocket.second_stage.payloads.composite_fairing.diameter.meters,
            )}
          </li>
          <li>
            {setParagraph(
              "Feet",
              rocket.second_stage.payloads.composite_fairing.diameter.feet,
            )}
          </li>
        </OutsideList>
      </StagesItem>
    </StagesList>
  );
};
