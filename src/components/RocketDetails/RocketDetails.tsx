import { FC, useState } from "react";
import { ButtonsList } from "../ButtonsList/ButtonsList";
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
import { Rocket } from "../../service/interfaces/RocketInterface";
import { SectionsWrapper } from "./RocketDetails.styled";

export const RocketDetails: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const rocket = rocketData;
  const [activeSection, setActiveSection] = useState("");

  // This seems incorrect - you don't actually have to pass the event here - you can parse the click directly in the ButtonsList
  // And then just handle click here, already having a meaningful section.
  // Also, sections can be e.g. strongly typed using Enum
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const dataTarget = event.currentTarget.getAttribute("data-target") ?? "";
    setActiveSection(dataTarget);
  };

  // I'd see it a bit more abstracted - it's sometimes easier to construct components in a semantic way (based on the content)
  // That way, I'd see only two components here - gallery and the "tech specs" or something similar
  // With so many sections, it's a bit hard to navigate between them.
  // Other way would be to create a wikipedia-style page, with accordions and some sidebar with summary + gallery on top?
  // From the code/structure perspective, the "smell" here is that you pass the exact same rocket to many components
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
