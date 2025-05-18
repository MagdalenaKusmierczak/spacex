import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  SectionWrapper,
  List,
  ThirdHeader,
  StyledSpan,
  StyledParagraph,
} from "./RocketSections.styled";

export const Engines: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
      {setParagraph("Number of engines", rocket.engines.number)}
      {setParagraph("Type", rocket.engines.type)}
      {setParagraph("Version", rocket.engines.version)}
      {setParagraph("Layout", rocket.engines.layout)}
      {setParagraph("Maximum engine loss", rocket.engines.engine_loss_max)}
      {setParagraph("First propellant", rocket.engines.propellant_1)}
      {setParagraph("Second propellant", rocket.engines.propellant_2)}
      <ThirdHeader>ISP</ThirdHeader>
      <List>
        <li>{setParagraph("Sea level", rocket.engines.isp.sea_level)}</li>
        <li>{setParagraph("Vaccum", rocket.engines.isp.vacuum)}</li>
      </List>
      <ThirdHeader>Thrust sea level</ThirdHeader>
      <List>
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
      </List>
      <ThirdHeader>Thrust vacuum</ThirdHeader>
      <List>
        <li>
          {setParagraph("KiloNewtons", rocket.engines.thrust_vacuum.kN, "kN")}
        </li>
        <li>
          {setParagraph("Pound-force", rocket.engines.thrust_vacuum.lbf, "lbf")}
        </li>
      </List>
      <List>
        <li>
          <ThirdHeader>Thrust to weight</ThirdHeader>
          <StyledParagraph>
            <StyledSpan>{rocket.engines.thrust_to_weight}</StyledSpan>
          </StyledParagraph>
        </li>
      </List>
    </SectionWrapper>
  );
};
