import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { SectionWrapper } from "./RocketSections.styled";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="more">
      <p>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener" target="_blank">
          Wikipedia {rocket.rocket_name} page.
        </a>
      </p>
    </SectionWrapper>
  );
};

export default MoreSection;
