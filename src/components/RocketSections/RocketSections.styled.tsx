import styled from "styled-components";
import arrow from "../../assets/down-arrow.png";
//Wrappers
export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Summary = styled.summary`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    width: 20px;
    height: 18px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
    margin-left: 0.75em;
    transition: 0.2s;
  }
  &:-webkit-details-marker {
    display: none;
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
  display: inline;
  margin-block: 1em;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
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
