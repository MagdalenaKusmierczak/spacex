import {
  Button,
  Menu,
  SectionName,
  ButtonsWrapper,
  MenuWrapper,
} from "./SpecsNav.styled";

export enum SectionType {
  GALLERY = "gallery",
  GENERAL_INFORMATION = "general-information",
  DIMENSIONS = "dimensions",
  ENGINES = "engines",
  LANDING_LEGS = "landing-legs",
  PAYLOADS_WEIGHTS = "payloads-weights",
  STAGES = "stages",
  MORE = "more",
}

const returnName = (input: SectionType): string => {
  return input.replace(/-/g, " ");
};

export const SpecsNav = () => {
  const handleClick = (section: SectionType) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuWrapper>
      <Menu>
        <ButtonsWrapper>
          {Object.values(SectionType).map((section) => (
            <Button
              key={section}
              onClick={() => {
                handleClick(section);
              }}
            >
              <SectionName>{returnName(section)}</SectionName>
            </Button>
          ))}
        </ButtonsWrapper>
      </Menu>
    </MenuWrapper>
  );
};
