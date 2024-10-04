import { FC, useState} from "react";
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
  const [activeSection, setActiveSection] = useState("");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Get the `data-target` attribute from the clicked button
    const dataTarget =
      event.currentTarget.getAttribute("data-target") ??
      "";
    // Set the `activeSection` state to the `data-target` value
    setActiveSection(dataTarget);
    //Returning expected data
  };

    const getActiveSection = () => {
      switch (activeSection) {
        case "gallery":
          return <GallerySection rocketData={rocket} />;
        case "general information":
          return <GeneralSection rocketData={rocket} />;
        case "dimensions":
          return <DimensionsSection rocketData={rocket} />;
        case "engines":
          return <EnginesSection rocketData={rocket} />;
        case "landing legs":
          return <LandingLegsSection rocketData={rocket} />;
        case "payloads":
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
      <SectionsWrapper>
       {getActiveSection()}
      </SectionsWrapper>
    </>
  );
};

export default RocketDetails;
