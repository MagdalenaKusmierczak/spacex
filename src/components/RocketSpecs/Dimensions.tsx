import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  GridFragment,
  SecondaryHeader,
  List,
  TernaryHeader,
  GridWrapper,
} from "./RocketSpecs.styled";

export const Dimensions: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <>
      <SecondaryHeader>Dimensions</SecondaryHeader>{" "}
      <GridWrapper>
        <GridFragment>
          <TernaryHeader>Height</TernaryHeader>
          <List>
            <li>{setParagraph("Meters", rocket.height.meters)}</li>
            <li>{setParagraph("Feet", rocket.height.feet)}</li>
          </List>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Diameter</TernaryHeader>
          <List>
            <li>{setParagraph("Meters", rocket.diameter.meters)}</li>
            <li>{setParagraph("Feet", rocket.diameter.feet)}</li>
          </List>
        </GridFragment>
        <GridFragment>
          <TernaryHeader>Mass</TernaryHeader>
          <List>
            <li>{setParagraph("Kilograms", rocket.mass.kg)}</li>
            <li>{setParagraph("Pounds", rocket.mass.lb)}</li>
          </List>
        </GridFragment>
      </GridWrapper>
    </>
  );
};
