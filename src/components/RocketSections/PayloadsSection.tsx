import { FC } from "react";
import setParagraph from "../../utils/setParagraph";
import Rocket from "../../service/types/RocketInterface";
import { List, SectionWrapper, OutsideList } from "./RocketSections.styled";

const PayloadsSection: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const rocket = rocketData;

  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default PayloadsSection;
