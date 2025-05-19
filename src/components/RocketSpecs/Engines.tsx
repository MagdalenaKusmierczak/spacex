import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  SectionWrapper,
  List,
  SecondaryHeader,
  TernaryHeader,
  StyledSpan,
  StyledParagraph,
  OutsideList,
} from "./RocketSpecs.styled";

export const Engines: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
      <SecondaryHeader>Engines</SecondaryHeader>
      {setParagraph("Number of engines", rocket.engines.number)}
      {setParagraph("Type", rocket.engines.type)}
      {setParagraph("Version", rocket.engines.version)}
      {setParagraph("Layout", rocket.engines.layout)}
      {setParagraph("Maximum engine loss", rocket.engines.engine_loss_max)}
      {setParagraph("First propellant", rocket.engines.propellant_1)}
      {setParagraph("Second propellant", rocket.engines.propellant_2)}
      <TernaryHeader>ISP</TernaryHeader>
      <OutsideList>
        <li>{setParagraph("Sea level", rocket.engines.isp.sea_level)}</li>
        <li>{setParagraph("Vaccum", rocket.engines.isp.vacuum)}</li>
      </OutsideList>
      <TernaryHeader>Thrust sea level</TernaryHeader>
      <OutsideList>
        <li>
          {setParagraph(
            "KiloNewtons",
            rocket.engines.thrust_sea_level.kN,
            "kN",
          )}
        </li>
        <li>
          {setParagraph(
            "Pound-force",
            rocket.engines.thrust_sea_level.lbf,
            "lbf",
          )}
        </li>
      </OutsideList>
      <TernaryHeader>Thrust vacuum</TernaryHeader>
      <OutsideList>
        <li>
          {setParagraph("KiloNewtons", rocket.engines.thrust_vacuum.kN, "kN")}
        </li>
        <li>
          {setParagraph("Pound-force", rocket.engines.thrust_vacuum.lbf, "lbf")}
        </li>
      </OutsideList>
      <List>
        <li>
          <TernaryHeader>Thrust to weight</TernaryHeader>
          <StyledParagraph>
            <StyledSpan>{rocket.engines.thrust_to_weight}</StyledSpan>
          </StyledParagraph>
        </li>
      </List>
    </SectionWrapper>
  );
};
