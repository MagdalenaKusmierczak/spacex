import { useRocketContext } from "../RocketProvider/RocketProvider";
import { Paragraph } from "../Paragraph";
import { SecondaryHeader, SectionWrapper } from "./RocketSpecs.styled";
export const GeneralInfo = () => {
  const { rocket } = useRocketContext();
  if (!rocket) return null;
  return (
    <SectionWrapper id="general-information">
      <SecondaryHeader>General informations</SecondaryHeader>
      <Paragraph name="Rocket type" data={rocket.type} />
      <Paragraph name="First flight" data={rocket.first_flight} />
      <Paragraph name="Company" data={rocket.company} />
      <Paragraph name="Country" data={rocket.country} />
      <Paragraph name="Number of stages" data={rocket.stages} />
      <Paragraph name="Number of boosters" data={rocket.boosters} />
      <Paragraph name="Cost per launch" data={rocket.cost_per_launch} />
      <Paragraph name="Success rate" data={rocket.success_rate_pct} />
      <Paragraph name="Active" data={rocket.active.toString()} />
    </SectionWrapper>
  );
};
