import { Button, Menu, SectionName, ButtonsWrapper } from "./SpecsNav.styled";

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
      const headerOffset = 280;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
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
  );
};
