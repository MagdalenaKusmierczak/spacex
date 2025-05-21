import { useRocketContext } from "../RocketProvider/RocketProvider";
import { SectionsWrapper } from "../RocketDetails/RocketDetails.styled";
import { MoreParagraph, SecondaryHeader } from "./RocketSpecs.styled";

export const More = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;

  return (
    <SectionsWrapper id="more">
      <SecondaryHeader>More</SecondaryHeader>
      <MoreParagraph>
        For more information go to:
        <a href={rocket.wikipedia} rel="noopener noreferrer" target="_blank">
          {rocket.name} Wikipedia
        </a>
      </MoreParagraph>
    </SectionsWrapper>
  );
};
