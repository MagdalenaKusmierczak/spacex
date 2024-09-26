import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const PayloadsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
      <section>
        <h3>Payloads</h3>
        <ul>
          {rocket.payload_weights.map((payload) => (
            <li key={payload.id}>
              <p>
                Name: <span>{payload.name}</span>
              </p>
              <p>Weight:</p>
              <ul>
                <li>
                  Kilograms: <span>{payload.kg}</span>
                </li>
                <li>
                  Pounds: <span>{payload.lb}</span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default PayloadsSection;
