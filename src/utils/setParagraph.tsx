import { StyledParagraph } from "../components/RocketSections/RocketSections.styled";

//Setting default paragraph for data
const setParagraph = (
  name: string,
  data: number | string | boolean | null,
  units?: string
) => {
  return (
    <StyledParagraph>
      {name}:{' '}
      <span>
        {data} {units ? units : ""}
      </span>
    </StyledParagraph>
  );
};
export default setParagraph;
