import { Paragraph } from "../Paragraph";
import { useRocketContext } from "../RocketProvider/RocketProvider";
import {
  GridFragment,
  SecondaryHeader,
  List,
  TernaryHeader,
  GridWrapper,
  SectionWrapper,
} from "./RocketSpecs.styled";

export const Dimensions = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <SectionWrapper id="dimensions">
      <SecondaryHeader>Dimensions</SecondaryHeader>{" "}
      <GridWrapper>
        <GridFragment>
          <TernaryHeader>Height</TernaryHeader>
          <List>
            <li>
              <Paragraph name="Meters" data={rocket.height.meters} />
            </li>
            <li>
              <Paragraph name="Feet" data={rocket.height.feet} />
            </li>
          </List>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Diameter</TernaryHeader>
          <List>
            <li>
              <Paragraph name="Meters" data={rocket.diameter.meters} />
            </li>
            <li>
              <Paragraph name="Feet" data={rocket.diameter.feet} />
            </li>
          </List>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Mass</TernaryHeader>
          <List>
            <li>
              <Paragraph name="Kilograms" data={rocket.mass.kg} />
            </li>
            <li>
              <Paragraph name="Pounds" data={rocket.mass.lb} />
            </li>
          </List>
        </GridFragment>
      </GridWrapper>
    </SectionWrapper>
  );
};
