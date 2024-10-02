import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";
import { SecondHeader, Summary } from "./RocketSections.styled";

const EnginesSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <details>
        <Summary>
          <SecondHeader>Engines</SecondHeader>
        </Summary>
        {setParagraph("Number of engines", rocket.engines.number)}
        {setParagraph("Type", rocket.engines.type)}
        {setParagraph("Version", rocket.engines.version)}
        {setParagraph("Layout", rocket.engines.layout)}
        {setParagraph("Maximum engine loss", rocket.engines.engine_loss_max)}
        {setParagraph("First propellant", rocket.engines.propellant_1)}
        {setParagraph("Second propellant", rocket.engines.propellant_2)}
        <h4>Thrust sea level</h4>
        <ul>
          <li>
            {setParagraph(
              "KiloNewtons",
              rocket.engines.thrust_sea_level.kN,
              "kN"
            )}
          </li>
          <li>
            {setParagraph(
              "Pound-force",
              rocket.engines.thrust_sea_level.lbf,
              "lbf"
            )}
          </li>
        </ul>
        <h4>Thrust vacuum</h4>
        <ul>
          <li>
            {setParagraph("KiloNewtons", rocket.engines.thrust_vacuum.kN, "kN")}
          </li>
          <li>
            {setParagraph(
              "Pound-force",
              rocket.engines.thrust_vacuum.lbf,
              "lbf"
            )}
          </li>
        </ul>
        {setParagraph("Thrust to weight", rocket.engines.thrust_to_weight)}
      </details>
    </section>
  );
};

export default EnginesSection;
