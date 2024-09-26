import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import setParagraph from "../../utils/setParagraph";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
      <div>
        <p>
          For more information go to:
          <a href={rocket.wikipedia} rel="noopener" target="_blank">
            Wikipedia {rocket.rocket_name} page.
          </a>
        </p>
      </div>
  );
};

export default MoreSection;
