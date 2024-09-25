import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";

const RocketSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  console.log(rocket)
  return <section><h2>{rocket.rocket_name}</h2>
    <h3>{rocket.description}</h3>
    
  </section>;
};

export default RocketSection;
