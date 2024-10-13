import { FC, useState } from "react";
import ButtonsList from "../ButtonsList/ButtonsList";
import {
  GeneralSection,
  DimensionsSection,
  StagesSection,
  EnginesSection,
  GallerySection,
  PayloadsSection,
  LandingLegsSection,
  MoreSection,
} from "../../components/RocketSections/";
import Rocket from "../../service/types/RocketInterface";
import { SectionsWrapper } from "./RocketDetails.styled";

const RocketDetails: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const rocket = rocketData;
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const dataTarget = event.currentTarget.getAttribute("data-target") ?? "";
    setActiveSection(dataTarget);
  };

  const getActiveSection = () => {
    switch (activeSection) {
      case "gallery":
        return <GallerySection rocketData={rocket} />;
      case "general-information":
        return <GeneralSection rocketData={rocket} />;
      case "dimensions":
        return <DimensionsSection rocketData={rocket} />;
      case "engines":
        return <EnginesSection rocketData={rocket} />;
      case "landing-legs":
        return <LandingLegsSection rocketData={rocket} />;
      case "payloads-weights":
        return <PayloadsSection rocketData={rocket} />;
      case "stages":
        return <StagesSection rocketData={rocket} />;
      case "more":
        return <MoreSection rocketData={rocket} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <ButtonsList handleClick={handleClick} activeSection={activeSection} />
      <SectionsWrapper>{getActiveSection()}</SectionsWrapper>
    </>
  );
};

export default RocketDetails;
