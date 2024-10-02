import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SecondHeader, Summary } from "./RocketSections.styled";

const PayloadsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <details>
        <Summary>
          <SecondHeader>Payloads</SecondHeader>
        </Summary>
        <ul>
          {rocket.payload_weights.map((payload) => (
            <li key={payload.id}>
              {setParagraph("Name", payload.name)}
              <p>Weight:</p>
              <ul>
                <li>{setParagraph("Kilograms", payload.kg, "kg")}</li>
                <li>{setParagraph("Pounds", payload.lb, "lb")}</li>
              </ul>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export default PayloadsSection;
