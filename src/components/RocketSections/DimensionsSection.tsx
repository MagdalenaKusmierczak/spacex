import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import {
  SectionWrapper,
  SecondHeader,
  List,
} from "./RocketSections.styled";

const DimensionsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="dimensions">
      <SecondHeader>Height</SecondHeader>
      <List>
        <li>{setParagraph("Meters", rocket.height.meters)}</li>
        <li>{setParagraph("Feet", rocket.height.feet)}</li>
      </List>
      <SecondHeader>Diameter</SecondHeader>
      <List>
        <li>{setParagraph("Meters", rocket.diameter.meters)}</li>
        <li>{setParagraph("Feet", rocket.diameter.feet)}</li>
      </List>
      <SecondHeader>Mass</SecondHeader>
      <List>
        <li>{setParagraph("Kilograms", rocket.mass.kg)}</li>
        <li>{setParagraph("Pounds", rocket.mass.lb)}</li>
      </List>
    </SectionWrapper>
  );
};

export default DimensionsSection;
