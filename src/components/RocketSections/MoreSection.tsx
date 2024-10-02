import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { SecondHeader, Summary } from "./RocketSections.styled";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section><details><Summary><SecondHeader>More</SecondHeader></Summary>
      <p>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener" target="_blank">
          Wikipedia {rocket.rocket_name} page.
        </a>
      </p></details>
    </section>
  );
};

export default MoreSection;
