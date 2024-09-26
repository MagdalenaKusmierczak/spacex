import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";


const IntroSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <h1>{rocket.rocket_name}</h1>
      <h2>{rocket.description}</h2>
    </section>
  );
};

export default IntroSection;
