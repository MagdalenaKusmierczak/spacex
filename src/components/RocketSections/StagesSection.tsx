import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const StagesSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <h3>Stages</h3>
      <ul>
        <li>
          <h4>First stage</h4>
          {setParagraph("Reusable", rocket.first_stage.reusable)}
          {setParagraph("Number of engines", rocket.first_stage.engines)}
          {setParagraph(
            "Fuel amount",
            rocket.first_stage.fuel_amount_tons,
            "tons"
          )}
          {setParagraph(
            "Burn time",
            rocket.first_stage.burn_time_sec,
            "seconds"
          )}
          <h5>Thrust sea level</h5>
          <ul>
            <li>
              {setParagraph(
                "Kilonewtons",
                rocket.first_stage.thrust_sea_level.kN,
                "kN"
              )}
            </li>
            <li>
              {setParagraph(
                "Pound-force",
                rocket.first_stage.thrust_sea_level.lbf,
                "lbf"
              )}
            </li>
          </ul>
          <h5>Thrust vacuum</h5>
          <ul>
            <li>
              {setParagraph(
                "Kilonewtons",
                rocket.first_stage.thrust_vacuum.kN,
                "kN"
              )}
            </li>
            <li>
              {setParagraph(
                "Pound-force",
                rocket.first_stage.thrust_vacuum.lbf,
                "lbf"
              )}
            </li>
          </ul>
        </li>
        <li>
          <h4>Second stage</h4>
          {setParagraph("Number of engines", rocket.second_stage.engines)}
          {setParagraph(
            "Fuel amount",
            rocket.second_stage.fuel_amount_tons,
            "tons"
          )}
          {setParagraph(
            "Burn time",
            rocket.second_stage.burn_time_sec,
            "seconds"
          )}
          <h5>Thrust</h5>
          <ul>
            <li>
              {" "}
              {setParagraph("Kilonewtons", rocket.second_stage.thrust.kN, "kN")}
            </li>
            <li>
              {setParagraph(
                "Pound-force",
                rocket.second_stage.thrust.kN,
                "lbf"
              )}
            </li>
          </ul>
          <h5>Payloads</h5>
          {setParagraph("First option", rocket.second_stage.payloads.option_1)}
          {rocket.second_stage.payloads.option_2
            ? setParagraph(
                "Second option",
                rocket.second_stage.payloads.option_2
              )
            : null}
          <h6>Composite fairing</h6>
          <p>Height</p>
          <ul>
            <li>
              {setParagraph(
                "Meters",
                rocket.second_stage.payloads.composite_fairing.height.meters
              )}
            </li>
            <li>
              {setParagraph(
                "Feet",
                rocket.second_stage.payloads.composite_fairing.height.feet
              )}
            </li>
          </ul>
          <p>Diamater</p>
          <ul>
            <li>
              {setParagraph(
                "Meters",
                rocket.second_stage.payloads.composite_fairing.diameter.meters
              )}
            </li>
            <li>
              {setParagraph(
                "Feet",
                rocket.second_stage.payloads.composite_fairing.diameter.feet
              )}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default StagesSection;
