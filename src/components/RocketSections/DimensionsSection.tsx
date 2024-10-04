import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const DimensionsSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section id="dimensions">
      <p>Height</p>
      <ul>
        <li>{setParagraph("Meter", rocket.height.meters)}</li>
        <li>{setParagraph("Feet", rocket.height.feet)}</li>
      </ul>
      <p>Diameter</p>
      <ul>
        <li>{setParagraph("Meters", rocket.diameter.meters)}</li>
        <li>{setParagraph("Feet", rocket.diameter.feet)}</li>
      </ul>
      <p>Mass</p>
      <ul>
        <li>{setParagraph("Kilograms", rocket.mass.kg)}</li>
        <li>{setParagraph("Pounds", rocket.mass.lb)}</li>
      </ul>
    </section>
  );
};

export default DimensionsSection;
