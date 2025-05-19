import { StyledParagraph, StyledSpan } from "./RocketSpecs/RocketSpecs.styled";

interface ParagraphProps {
  name: string;
  data: number | string | boolean | null;
  units?: string;
}
export const Paragraph: React.FC<ParagraphProps> = ({ name, data, units }) => {
  return (
    <StyledParagraph>
      {name}:
      <StyledSpan>
        {data !== null && data !== undefined ? data : "Unknown"}{" "}
        {units ? units : ""}
      </StyledSpan>
    </StyledParagraph>
  );
};
