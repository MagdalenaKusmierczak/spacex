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
