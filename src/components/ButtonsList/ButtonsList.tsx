import { Button, SectionName, ButtonsWrapper } from "./ButtonsList.styled";

interface ButtonsListProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonsList = ({ handleClick }: ButtonsListProps) => {
  return (
    <>
      <ButtonsWrapper>
        <Button data-target="gallery" onClick={handleClick}>
          <SectionName>Gallery</SectionName>
        </Button>
        <Button data-target="general-info" onClick={handleClick}>
          <SectionName>General information</SectionName>
        </Button>
        <Button data-target="dimnensions" onClick={handleClick}>
          <SectionName>Dimensions</SectionName>
        </Button>
        <Button data-target="engines" onClick={handleClick}>
          <SectionName>Engines</SectionName>
        </Button>
        <Button data-target="landing-legs" onClick={handleClick}>
          <SectionName>Landing legs</SectionName>
        </Button>
        <Button data-target="payloads" onClick={handleClick}>
          <SectionName>Payloads</SectionName>
        </Button>
        <Button data-target="stages" onClick={handleClick}>
          <SectionName>Stages</SectionName>
        </Button>
        <Button data-target="more" onClick={handleClick}>
          <SectionName>More</SectionName>
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default ButtonsList;
