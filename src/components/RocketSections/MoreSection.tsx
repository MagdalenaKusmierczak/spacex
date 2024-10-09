import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { SectionWrapper, MoreParagraph } from "./RocketSections.styled";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <SectionWrapper id="more">
      <MoreParagraph>
        For more information go to: 
        <a href={rocket.wikipedia} rel="noopener" target="_blank">
          {rocket.name} Wikipedia
        </a>
      </MoreParagraph>
    </SectionWrapper>
  );
};

export default MoreSection;
