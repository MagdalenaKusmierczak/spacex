import { Paragraph } from "../Paragraph";
import { useRocketContext } from "../RocketProvider/RocketProvider";
import { SectionsWrapper } from "../RocketDetails/RocketDetails.styled";
import {
  GridList,
  StagesItem,
  SecondaryHeader,
  TernaryHeader,
  QuaternaryHeader,
  OutsideList,
  StyledParagraph,
} from "./RocketSpecs.styled";

export const Stages = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <SectionsWrapper id="stages">
      <SecondaryHeader>Stages</SecondaryHeader>
      <GridList>
        <StagesItem>
          <TernaryHeader>First stage</TernaryHeader>
          <Paragraph
            name="Reusable"
            data={rocket.first_stage.reusable.toString()}
          />
          <Paragraph
            name="Number of engines"
            data={rocket.first_stage.engines}
          />
          <Paragraph
            name="Fuel amount"
            data={rocket.first_stage.fuel_amount_tons}
            units="tons"
          />
          <Paragraph
            name="Burn time"
            data={rocket.first_stage.burn_time_sec}
            units="seconds"
          />
          <QuaternaryHeader>Thrust sea level</QuaternaryHeader>
          <OutsideList>
            <li>
              <Paragraph
                name="Kilonewtons"
                data={rocket.first_stage.thrust_sea_level.kN}
                units="kN"
              />
            </li>
            <li>
              <Paragraph
                name="Pound-force"
                data={rocket.first_stage.thrust_sea_level.lbf}
                units="lbf"
              />
            </li>
          </OutsideList>
          <QuaternaryHeader>Thrust vacuum</QuaternaryHeader>
          <OutsideList>
            <li>
              <Paragraph
                name="Kilonewtons"
                data={rocket.first_stage.thrust_vacuum.kN}
                units="kN"
              />
            </li>
            <li>
              <Paragraph
                name="Pound-force"
                data={rocket.first_stage.thrust_vacuum.lbf}
                units="lbf"
              />
            </li>
          </OutsideList>
        </StagesItem>
        <StagesItem>
          <TernaryHeader>Second stage</TernaryHeader>
          <Paragraph
            name="Reusable"
            data={rocket.second_stage.reusable.toString()}
          />
          <Paragraph
            name="Number of engines"
            data={rocket.second_stage.engines}
          />
          <Paragraph
            name="Fuel amount"
            data={rocket.second_stage.fuel_amount_tons}
            units="tons"
          />
          <Paragraph
            name="Burn time"
            data={rocket.second_stage.burn_time_sec}
            units="seconds"
          />
          <QuaternaryHeader>Thrust</QuaternaryHeader>
          <OutsideList>
            <li>
              <Paragraph
                name="Kilonewtons"
                data={rocket.second_stage.thrust.kN}
                units="kN"
              />
            </li>
            <li>
              <Paragraph
                name="Pound-force"
                data={rocket.second_stage.thrust.kN}
                units="lbf"
              />
            </li>
          </OutsideList>
        </StagesItem>
        <StagesItem>
          <TernaryHeader>Payloads</TernaryHeader>
          <Paragraph
            name="First option"
            data={rocket.second_stage.payloads.option_1}
          />
          <QuaternaryHeader>Composite fairing</QuaternaryHeader>
          <StyledParagraph>Height</StyledParagraph>
          <OutsideList>
            <li>
              <Paragraph
                name="Meters"
                data={
                  rocket.second_stage.payloads.composite_fairing.height.meters
                }
              />
            </li>
            <li>
              <Paragraph
                name="Feet"
                data={
                  rocket.second_stage.payloads.composite_fairing.height.feet
                }
              />
            </li>
          </OutsideList>
          <StyledParagraph>Diamater</StyledParagraph>
          <OutsideList>
            <li>
              <Paragraph
                name="Meters"
                data={
                  rocket.second_stage.payloads.composite_fairing.diameter.meters
                }
              />
            </li>
            <li>
              <Paragraph
                name="Feet"
                data={
                  rocket.second_stage.payloads.composite_fairing.diameter.feet
                }
              />
            </li>
          </OutsideList>
        </StagesItem>
      </GridList>
    </SectionsWrapper>
  );
};
