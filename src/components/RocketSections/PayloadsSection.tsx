import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { List, SectionWrapper, StyledParagraph, OutsideList} from "./RocketSections.styled";

const PayloadsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="payloads">
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
