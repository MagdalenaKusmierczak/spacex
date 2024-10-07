import {
  StyledParagraph,
  StyledSpan,
} from "../components/RocketSections/RocketSections.styled";

//Setting default paragraph for data
const setParagraph = (
  name: string,
  data: number | string | boolean | null,
  units?: string
) => {
  return (
    <StyledParagraph>
      {name}:{" "}
      <StyledSpan>
        {data} {units ? units : ""}
      </StyledSpan>
    </StyledParagraph>
  );
};
export default setParagraph;
