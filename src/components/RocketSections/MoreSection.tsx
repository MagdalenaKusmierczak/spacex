import { FC } from "react";
import Rocket from "../../service/interfaces/RocketInterface";
import { SectionWrapper, MoreParagraph } from "./RocketSections.styled";

const MoreSection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;

  return (
    <SectionWrapper>
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
