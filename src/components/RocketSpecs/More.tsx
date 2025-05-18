import { FC } from "react";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { MoreParagraph } from "./RocketSections.styled";

export const More: FC<{ rocket: Rocket }> = ({ rocket }) => {
  return (
    <>
      <MoreParagraph>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener noreferrer" target="_blank">
          {rocket.name} Wikipedia
        </a>
      </MoreParagraph>
    </>
  );
};
