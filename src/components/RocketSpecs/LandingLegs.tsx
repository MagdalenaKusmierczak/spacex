import { Paragraph } from "../Paragraph";
import { useRocketContext } from "../RocketProvider/RocketProvider";

import { SecondaryHeader, SectionWrapper } from "./RocketSpecs.styled";

export const LandingLegs = () => {
  const { rocket } = useRocketContext();

  if (!rocket) return null;
  return (
    <SectionWrapper id="landing-legs">
      <SecondaryHeader>Landing legs</SecondaryHeader>
      <Paragraph name="Number of legs" data={rocket.landing_legs.number} />
      <Paragraph name="Material" data={rocket.landing_legs.material} />
    </SectionWrapper>
  );
};
