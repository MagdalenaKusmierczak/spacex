import { useState } from "react";
import ButtonsListProps from "../../service/types/ButtonsListProps";
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

  const sections = [
    { target: "gallery", name: "Gallery" },
    { target: "general-information", name: "General information" },
    { target: "dimensions", name: "Dimensions" },
    { target: "engines", name: "Engines" },
    { target: "landing-legs", name: "Landing legs" },
    { target: "payloads-weights", name: "Payloads weights" },
    { target: "stages", name: "Stages" },
    { target: "more", name: "More" },
  ];

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
            {sections.map((section) => (
              <Button
                key={section.target}
                data-target={section.target}
                onClick={handleClick}
              >
                <SectionName>{section.name}</SectionName>
              </Button>
            ))}
          </ButtonsWrapper>
        )}
      </MenuButton>
    </MenuWrapper>
  );
};

export default ButtonsList;
