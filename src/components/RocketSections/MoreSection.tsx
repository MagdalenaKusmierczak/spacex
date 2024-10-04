import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section id="more">
      <p>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener" target="_blank">
          Wikipedia {rocket.rocket_name} page.
        </a>
      </p>
    </section>
  );
};

export default MoreSection;
