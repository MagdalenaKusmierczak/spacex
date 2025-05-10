import {
  StyledParagraph,
  StyledSpan,
} from "../components/RocketSections/RocketSections.styled";

// Why not just using the component with props? 🙂
const setParagraph = (
  name: string,
  data: number | string | boolean | null,
  units?: string,
) => {
  return (
    <StyledParagraph>
      {name}:{" "}
      <StyledSpan>
        {data !== null && data !== undefined ? data : "Unknown"}{" "}
        {units ? units : ""}
      </StyledSpan>
    </StyledParagraph>
  );
};

export default setParagraph;
