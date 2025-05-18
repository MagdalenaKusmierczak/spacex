import {
  Button,
  Menu,
  SectionName,
  ButtonsWrapper,
  MenuWrapper,
} from "./ButtonsList.styled";

interface ButtonsListProps {
  handleClick: (section: string) => void;
}

export const ButtonsList = ({ handleClick }: ButtonsListProps) => {
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
      <Menu data-target="details">
        <ButtonsWrapper>
          {sections.map((section) => (
            <Button
              key={section.target}
              data-target={section.target}
              onClick={() => {
                handleClick(section.target);
              }}
            >
              <SectionName>{section.name}</SectionName>
            </Button>
          ))}
        </ButtonsWrapper>
      </Menu>
    </MenuWrapper>
  );
};
