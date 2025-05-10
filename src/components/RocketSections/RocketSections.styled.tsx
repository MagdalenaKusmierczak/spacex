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

export const ImageWrapper = styled.div``;

// Primary/Secondary/Ternary would be better for these names
export const FirstHeader = styled.h1`
  margin-block: 1em;
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SecondHeader = styled.h2`
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

export const ThirdHeader = styled.h3`
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
  text-shadow:
    0 0 30px rgb(174 192 200),
    0 0 40px #949d68;
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
  border-bottom: 5px dotted #ffc41f;
  border-radius: 25%;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const OutsideList = styled(List)`
  border-bottom: none;
`;

export const StagesList = styled(List)`
  border-bottom: 1px solid #ffc41f;
  border-radius: 0;
`;

export const StagesItem = styled.li`
  border-bottom: 2px solid #ffc41f;
  padding-block: 10px;
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
