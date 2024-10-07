import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { List, ListItem, SectionWrapper, StyledParagraph, OutsideList} from "./RocketSections.styled";

const PayloadsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="payloads">
      <OutsideList>
        {rocket.payload_weights.map((payload) => (
          <ListItem key={payload.id}>
            {setParagraph("Name", payload.name)}
            <StyledParagraph>Weight:</StyledParagraph>
            <List>
              <li>{setParagraph("Kilograms", payload.kg, "kg")}</li>
              <li>{setParagraph("Pounds", payload.lb, "lb")}</li>
            </List>
          </ListItem>
        ))}
      </OutsideList>
    </SectionWrapper>
  );
};

export default PayloadsSection;
