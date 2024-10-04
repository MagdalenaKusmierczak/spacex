import { Button, SectionName, ButtonsWrapper } from "./ButtonsList.styled";

const ButtonsList = () => {
  return (
    <>
      <ButtonsWrapper>
        <Button data-target="gallery">
          <SectionName>Gallery</SectionName>
        </Button>
        <Button data-target="general-info">
          <SectionName>General information</SectionName>
        </Button>
        <Button data-target="dimnensions">
          <SectionName>Dimensions</SectionName>
        </Button>
        <Button data-target="engines">
          <SectionName>Engines</SectionName>
        </Button>
        <Button data-target="landing-legs">
          <SectionName>Landing legs</SectionName>
        </Button>
        <Button data-target="payloads">
          <SectionName>Payloads</SectionName>
        </Button>
        <Button data-target="stages">
          <SectionName>Stages</SectionName>
        </Button>
        <Button data-target="more">
          <SectionName>More</SectionName>
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default ButtonsList;
