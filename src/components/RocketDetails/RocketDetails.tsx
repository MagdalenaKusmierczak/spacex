import {
  GeneralInfo,
  Dimensions,
  Stages,
  Engines,
  Gallery,
  Payloads,
  LandingLegs,
  More,
  Intro,
} from "../RocketSpecs";
import { SectionsWrapper } from "./RocketDetails.styled";

export const RocketDetails = () => {
  return (
    <>
      <SectionsWrapper>
        <Intro />
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
