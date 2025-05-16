import styled from "styled-components";

export const Arrow = styled.div`
  border-radius: 50%;
  cursor: pointer;
  color: #ffc41f;
  font-size: 20px;
  line-height: 1;
  font-family: "slick"; // Always provide meaningful font fallbacks, e.g. arial etc.
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 35px;
  }
`;

export const ArrowStyled = styled(Arrow)<{ $direction: "prev" | "next" }>`
  &:before {
    z-index: 1;
    position: absolute;
    content: ${({ $direction }) => ($direction === "prev" ? '"←"' : '"→"')};

    ${({ $direction }) =>
      $direction === "prev" &&
      `
      top: 90px;
      left: -20px;
      @media screen and (min-width: 600px) {
       left: 5vh;
       }
      @media screen and (min-width: 768px) {
        top: 250px;
         left: -25px;
      }
      @media screen and (min-width: 1280px) {
        top: 350px;
        left: 0;
      }
    `}
    ${({ $direction }) =>
      $direction === "next" &&
      `
      right: -20px;
      top: -115px;
       @media screen and (min-width: 600px) {
       right: 5vh;
       }
      @media screen and (min-width: 768px) {
        top:-250px;
        right: -30px;
      }
      @media screen and (min-width: 1280px) {
        right: 0;
         top: -340px;
      }
      `}
  }
`;
