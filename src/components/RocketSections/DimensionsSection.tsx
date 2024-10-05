import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import {
  SectionWrapper,
  SecondHeader,
  List,
  ListItem,
} from "./RocketSections.styled";

const DimensionsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="dimensions">
      <SecondHeader>Height</SecondHeader>
      <List>
        <ListItem>{setParagraph("Meter", rocket.height.meters)}</ListItem>
        <ListItem>{setParagraph("Feet", rocket.height.feet)}</ListItem>
      </List>
      <SecondHeader>Diameter</SecondHeader>
      <List>
        <ListItem>{setParagraph("Meters", rocket.diameter.meters)}</ListItem>
        <ListItem>{setParagraph("Feet", rocket.diameter.feet)}</ListItem>
      </List>
      <SecondHeader>Mass</SecondHeader>
      <List>
        <ListItem>{setParagraph("Kilograms", rocket.mass.kg)}</ListItem>
        <ListItem>{setParagraph("Pounds", rocket.mass.lb)}</ListItem>
      </List>
    </SectionWrapper>
  );
};

export default DimensionsSection;
