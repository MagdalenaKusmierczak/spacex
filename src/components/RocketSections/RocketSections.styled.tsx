import styled from "styled-components";

//Wrappers
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

//Headers
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
  font-size: 18px;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

//Paragraphs
export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
  font-size: 18px;
  text-shadow: 0 0 30px rgb(174 192 200), 0 0 40px #949d68;
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
export const StyledSpan = styled.span`
  font-weight: 600;
  padding-left: 10px;
  text-transform: capitalize;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
//List style
export const List = styled.ul``;

export const ListItem = styled.li``;
