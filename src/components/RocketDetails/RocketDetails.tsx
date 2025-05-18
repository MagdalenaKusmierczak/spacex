import { FC } from "react";
import { ButtonsList } from "../ButtonsList/ButtonsList";
import {
  GeneralInfo,
  Dimensions,
  Stages,
  Engines,
  Gallery,
  Payloads,
  LandingLegs,
  More,
} from "../RocketSpecs";
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SectionsWrapper } from "./RocketDetails.styled";

enum SectionType {
  GALLERY = "gallery",
  GENERAL_INFORMATION = "general-information",
  DIMENSIONS = "dimensions",
  ENGINES = "engines",
  LANDING_LEGS = "landing-legs",
  PAYLOADS_WEIGHTS = "payloads-weights",
  STAGES = "stages",
  MORE = "more",
}

export const RocketDetails: FC<{ rocket: Rocket }> = ({ rocket }) => {
  const handleClick = (section: SectionType) => {
    return section;
  };

  // I'd see it a bit more abstracted - it's sometimes easier to construct components in a semantic way (based on the content)
  // That way, I'd see only two components here - gallery and the "tech specs" or something similar
  // With so many sections, it's a bit hard to navigate between them.
  // Other way would be to create a wikipedia-style page, with accordions and some sidebar with summary + gallery on top?
  // From the code/structure perspective, the "smell" here is that you pass the exact same rocket to many components

  return (
    <>
      <ButtonsList handleClick={handleClick} />
      <SectionsWrapper>
        <Gallery rocket={rocket} />
        <GeneralInfo rocket={rocket} />
        <Dimensions rocket={rocket} />
        <Engines rocket={rocket} />
        <LandingLegs rocket={rocket} />
        <Payloads rocket={rocket} />
        <Stages rocket={rocket} />
        <More rocket={rocket} />;
      </SectionsWrapper>
    </>
  );
};
