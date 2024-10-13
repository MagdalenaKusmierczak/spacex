import { useState } from "react";
import ButtonsListProps from "../../service/interfaces/ButtonsListProps";
import {
  Button,
  MenuButton,
  SectionName,
  ButtonsWrapper,
  MenuWrapper,
} from "./ButtonsList.styled";

const ButtonsList = ({ handleClick, activeSection }: ButtonsListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuWrapper>
      <MenuButton data-target="details" onClick={handleToggle}>
        <SectionName>
          {activeSection
            ? `Details: ${activeSection.replace("-", " ")}`
            : "Details"}
        </SectionName>
        {isOpen && (
          <ButtonsWrapper>
            <Button data-target="gallery" onClick={handleClick}>
              <SectionName>Gallery</SectionName>
            </Button>
            <Button data-target="general-information" onClick={handleClick}>
              <SectionName>General information</SectionName>
            </Button>
            <Button data-target="dimensions" onClick={handleClick}>
              <SectionName>Dimensions</SectionName>
            </Button>
            <Button data-target="engines" onClick={handleClick}>
              <SectionName>Engines</SectionName>
            </Button>
            <Button data-target="landing-legs" onClick={handleClick}>
              <SectionName>Landing legs</SectionName>
            </Button>
            <Button data-target="payloads-weights" onClick={handleClick}>
              <SectionName>Payloads weights</SectionName>
            </Button>
            <Button data-target="stages" onClick={handleClick}>
              <SectionName>Stages</SectionName>
            </Button>
            <Button data-target="more" onClick={handleClick}>
              <SectionName>More</SectionName>
            </Button>
          </ButtonsWrapper>
        )}
      </MenuButton>
    </MenuWrapper>
  );
};

export default ButtonsList;
