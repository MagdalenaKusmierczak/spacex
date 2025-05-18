import { FC } from "react";
import { setParagraph } from "../../utils/setParagraph";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { List, OutsideList } from "./RocketSections.styled";

export const Payloads: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <OutsideList>
      {rocket.payload_weights.map((payload) => (
        <li key={payload.id}>
          {setParagraph("Name", payload.name)}
          {setParagraph("ID", payload.id)}
          <List>
            <li>{setParagraph("Kilograms", payload.kg, "kg")}</li>
            <li>{setParagraph("Pounds", payload.lb, "lb")}</li>
          </List>
        </li>
      ))}
    </OutsideList>
  );
};
