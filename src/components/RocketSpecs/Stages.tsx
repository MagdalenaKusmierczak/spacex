import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  GridList,
  StagesItem,
  SecondaryHeader,
  TernaryHeader,
  QuaternaryHeader,
  OutsideList,
  StyledParagraph,
} from "./RocketSpecs.styled";

export const Stages: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <>
      <SecondaryHeader>Stages</SecondaryHeader>
      <GridList>
        <StagesItem>
          <TernaryHeader>First stage</TernaryHeader>
          {setParagraph("Reusable", rocket.first_stage.reusable.toString())}
          {setParagraph("Number of engines", rocket.first_stage.engines)}
          {setParagraph(
            "Fuel amount",
            rocket.first_stage.fuel_amount_tons,
            "tons",
          )}
          {setParagraph(
            "Burn time",
            rocket.first_stage.burn_time_sec,
            "seconds",
          )}
          <QuaternaryHeader>Thrust sea level</QuaternaryHeader>
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
          <QuaternaryHeader>Thrust vacuum</QuaternaryHeader>
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
          <TernaryHeader>Second stage</TernaryHeader>
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
          <QuaternaryHeader>Thrust</QuaternaryHeader>
          <OutsideList>
            <li>
              {setParagraph("Kilonewtons", rocket.second_stage.thrust.kN, "kN")}
            </li>
            <li>
              {setParagraph(
                "Pound-force",
                rocket.second_stage.thrust.kN,
                "lbf",
              )}
            </li>
          </OutsideList>
        </StagesItem>
        <StagesItem>
          <TernaryHeader>Payloads</TernaryHeader>
          {setParagraph("First option", rocket.second_stage.payloads.option_1)}
          <QuaternaryHeader>Composite fairing</QuaternaryHeader>
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
      </GridList>
    </>
  );
};
