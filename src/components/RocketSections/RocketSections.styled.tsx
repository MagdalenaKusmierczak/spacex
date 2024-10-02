import styled from "styled-components";
export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FirstHeader = styled.h1`
  margin-block: 1em;
  text-align: center;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
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
    width: 65%;
  }
`;
