import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";

const RocketSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  //Setting default paragraph for data
  const setParagraph = (
    name: string,
    data: number | string | boolean | null,
    units?: string
  ) => {
    return (
      <p>
        {name}:
        <span>
          {data} {units ? units : ""}
        </span>
      </p>
    );
  };
  return (
    <section>
      <h1>{rocket.rocket_name}</h1>
      <h2>{rocket.description}</h2>
      <div>
        <h3>Basic information</h3>
        {setParagraph("Rocket type", rocket.rocket_type)}
        {setParagraph("Active", rocket.active)}
        {setParagraph("Number of stages", rocket.stages)}
        {setParagraph("Number of boosters", rocket.boosters)}
        {setParagraph("Cost per launch", rocket.cost_per_launch)}
        {setParagraph("Success rate", rocket.success_rate_pct)}
        {setParagraph("First flight", rocket.first_flight)}
        {setParagraph("Country", rocket.country)}
        {setParagraph("Company", rocket.company)}
      </div>
      <div>
        <h3>Dimensions</h3>
        <p>Height</p>
        <ul>
          <li></li>
          <li>{setParagraph("Feet:", rocket.height.feet)}</li>
        </ul>
        <p>Diameter</p>
        <ul>
          <li>{setParagraph("Meters", rocket.diameter.meters)}</li>
          <li>{setParagraph("Feet:", rocket.diameter.feet)}</li>
        </ul>
        <p>Mass</p>
        <ul>
          <li>{setParagraph("Kilograms", rocket.mass.kg)}</li>
          <li>{setParagraph("Pounds", rocket.mass.lb)}</li>
        </ul>
      </div>
      <div>
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
      </div>
      <div>
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
                {setParagraph(
                  "Kilonewtons",
                  rocket.second_stage.thrust.kN,
                  "kN"
                )}
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
            {setParagraph(
              "First option",
              rocket.second_stage.payloads.option_1
            )}
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
      </div>
      <div>
        <h3>Engines</h3>
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
      </div>
      <div>
        <h3>Landing legs</h3>
        {setParagraph("Number of legs", rocket.landing_legs.number)}
        {setParagraph("Material", rocket.landing_legs.material)}
      </div>
      <div>
        <p>
          For more information go to:
          <a href={rocket.wikipedia} rel="noopener" target="_blank">
            Wikipedia {rocket.rocket_name} page.
          </a>
        </p>
      </div>
      <div>
        <h3>Gallery</h3>
        <ul>
          {rocket.flickr_images.map((image) => (
            <li key={rocket.flickr_images.indexOf(image)}>
              <img
                src={image}
                alt={rocket.rocket_name}
                height="256"
                width="256"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RocketSection;
