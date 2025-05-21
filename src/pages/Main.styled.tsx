import styled from "@emotion/styled";

export const Main = styled.main`
  z-index: 1;
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
