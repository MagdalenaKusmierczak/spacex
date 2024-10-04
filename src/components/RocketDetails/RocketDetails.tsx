import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { SectionsWrapper } from "./RocketDetails.styled";
import ButtonsList from "../ButtonsList/ButtonsList";
import GeneralSection from "../../components/RocketSections/GeneralSection";
import DimensionsSection from "../../components/RocketSections/DimensionsSection";
import StagesSection from "../../components/RocketSections/StagesSection";
import EnginesSection from "../../components/RocketSections/EnginesSection";
import GallerySection from "../../components/RocketSections/GallerySection";
import PayloadsSection from "../../components/RocketSections/PayloadsSection";
import LandingLegsSection from "../../components/RocketSections/LandingLegsSection";
import MoreSection from "../../components/RocketSections/MoreSection";

const RocketDetails: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <>
      <ButtonsList />
      <SectionsWrapper>
        <GallerySection rocketData={rocket} />
        <GeneralSection rocketData={rocket} />
        <DimensionsSection rocketData={rocket} />
        <EnginesSection rocketData={rocket} />
        <LandingLegsSection rocketData={rocket} />
        <PayloadsSection rocketData={rocket} />
        <StagesSection rocketData={rocket} />
        <MoreSection rocketData={rocket} />
      </SectionsWrapper>
    </>
  );
};

export default RocketDetails;
