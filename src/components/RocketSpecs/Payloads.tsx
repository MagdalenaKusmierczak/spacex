import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  OutsideList,
  SecondaryHeader,
  GridListPayload,
  SectionWrapper,
} from "./RocketSpecs.styled";

export const Payloads: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
      <SecondaryHeader>Payloads</SecondaryHeader>
      <GridListPayload>
        {rocket.payload_weights.map((payload) => (
          <li key={payload.id}>
            {setParagraph("Name", payload.name)}
            {setParagraph("ID", payload.id)}
            <OutsideList>
              <li>{setParagraph("Kilograms", payload.kg, "kg")}</li>
              <li>{setParagraph("Pounds", payload.lb, "lb")}</li>
            </OutsideList>
          </li>
        ))}
      </GridListPayload>
    </SectionWrapper>
  );
};
