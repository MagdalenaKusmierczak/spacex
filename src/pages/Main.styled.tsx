import styled from "styled-components";

export const Main = styled.main`
  width: 85%;
  min-height: 90vh;
  margin-bottom: 100px;
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const RocketMain = styled(Main)`
  margin-top: 40px;
`;
