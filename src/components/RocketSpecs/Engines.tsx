import { useRocketContext } from "../RocketProvider/RocketProvider";
import { Paragraph } from "../Paragraph";
import {
  SectionWrapper,
  SecondaryHeader,
  TernaryHeader,
  StyledSpan,
  StyledParagraph,
  OutsideList,
  Grid,
  GridFragment,
} from "./RocketSpecs.styled";

export const Engines = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <SectionWrapper id="engines">
      <SecondaryHeader>Engines</SecondaryHeader>
      <Paragraph name="Number of engines" data={rocket.engines.number} />
      <Paragraph name="Type" data={rocket.engines.type} />
      <Paragraph name="Version" data={rocket.engines.version} />
      <Paragraph name="Layout" data={rocket.engines.layout} />
      <Paragraph
        name="Maximum engine loss"
        data={rocket.engines.engine_loss_max}
      />
      <Paragraph name="First propellant" data={rocket.engines.propellant_1} />
      <Paragraph name="Second propellant" data={rocket.engines.propellant_2} />
      <TernaryHeader>ISP</TernaryHeader>
      <OutsideList>
        <li>
          <Paragraph name="Sea level" data={rocket.engines.isp.sea_level} />
        </li>
        <li>
          <Paragraph name="Vaccum" data={rocket.engines.isp.vacuum} />
        </li>
      </OutsideList>{" "}
      <Grid>
        <GridFragment>
          <TernaryHeader>Thrust sea level</TernaryHeader>

          <OutsideList>
            <li>
              <Paragraph
                name="KiloNewtons"
                data={rocket.engines.thrust_sea_level.kN}
                units="kN"
              />
            </li>
            <li>
              <Paragraph
                name="Pound-force"
                data={rocket.engines.thrust_sea_level.lbf}
                units="lbf"
              />
            </li>
          </OutsideList>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Thrust vacuum</TernaryHeader>
          <OutsideList>
            <li>
              <Paragraph
                name="KiloNewtons"
                data={rocket.engines.thrust_vacuum.kN}
                units="kN"
              />
            </li>
            <li>
              <Paragraph
                name="Pound-force"
                data={rocket.engines.thrust_vacuum.lbf}
                units="lbf"
              />
            </li>
          </OutsideList>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Thrust to weight</TernaryHeader>
          <OutsideList>
            <li>
              <StyledParagraph>
                <StyledSpan>{rocket.engines.thrust_to_weight}</StyledSpan>
              </StyledParagraph>
            </li>
          </OutsideList>
        </GridFragment>
      </Grid>
    </SectionWrapper>
  );
};
