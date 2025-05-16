import { FC } from "react";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SectionWrapper, MoreParagraph } from "./RocketSections.styled";

export const MoreSection: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <SectionWrapper>
      <MoreParagraph>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener noreferrer" target="_blank">
          {rocket.name} Wikipedia
        </a>
      </MoreParagraph>
    </SectionWrapper>
  );
};
