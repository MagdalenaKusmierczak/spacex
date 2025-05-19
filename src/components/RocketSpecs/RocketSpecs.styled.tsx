import styled from "styled-components";

export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 35px;
  }
`;

export const DimensionsFragment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DimensionsWrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const ImageWrapper = styled.div``;

// Primary/Secondary/Ternary would be better for these names
export const PrimaryHeader = styled.h1`
  margin-block: 1em;
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SecondaryHeader = styled.h2`
  margin: 10px;
  text-align: center;
  font-size: 19px;
  color: #f4bf69;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 23px;
  }
`;

export const TernaryHeader = styled.h3`
  margin: 10px;
  text-align: center;
  font-size: 18px;
  color: #f4bf69;
  margin: 0 auto;
  font-style: italic;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const QuaternaryHeader = styled.h4`
  margin: 10px;
  text-align: center;
  font-size: 18px;
  color: #f4bf69;
  margin: 0 auto;
  font-style: italic;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    width: 75%;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 400;
  color: rgb(250, 249, 246);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-left: 35%;
    display: block;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    margin-left: 40%;
  }
`;

export const MoreParagraph = styled(StyledParagraph)`
  margin-left: 0;
  text-align: center;
  a {
    color: #f4bf69;
    text-decoration: none;
    padding-inline: 8px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  padding-left: 10px;
  text-transform: capitalize;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
  border-bottom: 1px solid #faf9f6;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const OutsideList = styled(List)`
  border-bottom: none;
`;

export const StagesList = styled(List)`
  border-bottom: 1px solid #faf9f6;
  border-radius: 0;
`;

export const StagesItem = styled.li`
  padding-block: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid #faf9f6;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
  width: 260px;
  height: 195px;
  @media screen and (min-width: 768px) {
    width: 700px;
    height: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 1024px;
    height: 700px;
  }
`;
