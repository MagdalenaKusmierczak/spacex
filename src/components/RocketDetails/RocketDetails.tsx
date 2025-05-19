import { SpecsNav } from "../SpecsNav/SpecsNav";
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
import { SectionsWrapper } from "./RocketDetails.styled";

export enum SectionType {
  GALLERY = "gallery",
  GENERAL_INFORMATION = "general-information",
  DIMENSIONS = "dimensions",
  ENGINES = "engines",
  LANDING_LEGS = "landing-legs",
  PAYLOADS_WEIGHTS = "payloads-weights",
  STAGES = "stages",
  MORE = "more",
}

export const RocketDetails = () => {
  const handleClick = (section: SectionType) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SpecsNav handleClick={handleClick} />
      <SectionsWrapper>
        <Gallery />
        <GeneralInfo />
        <Dimensions />
        <Engines />
        <LandingLegs />
        <Payloads />
        <Stages />
        <More />;
      </SectionsWrapper>
    </>
  );
};
