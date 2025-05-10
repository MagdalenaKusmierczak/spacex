import { useState } from "react";

// This line would break on Unix - check `types -> Types` 😉
// I made similar mistakes many times on MacBooks (they're case-insensitive Unix-like systems) as well,
// may be really problematic in some cases
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

  // Here you should parse the click and call the click from the parent component, but with extracted section info.
  // You can use closure for that, e.g.:
  /*
      <-- In the "map" below, as a Button prop
                onClick={() => handleClick(section)}
   */
  // Then you don't need to use `data-target` at all

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
