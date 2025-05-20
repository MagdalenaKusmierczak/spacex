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

export const RocketDetails = () => {
  return (
    <>
      <SpecsNav />
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
