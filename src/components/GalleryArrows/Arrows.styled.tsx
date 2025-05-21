import styled from "@emotion/styled";

export const Arrow = styled.div`
  border-radius: 50%;
  cursor: pointer;
  color: #ffc41f;
  font-size: 20px;
  line-height: 1;
  font-family: "slick", sans-serif;
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
      top: 95px;
      left: -20px;
      @media screen and (min-width: 600px) {
       left: 5vh;
       }
      @media screen and (min-width: 768px) {
        top: 255px;
         left: -35px;
      }
      @media screen and (min-width: 1280px) {
        top: 370px;
        left: 0;
      }
    `}
    ${({ $direction }) =>
      $direction === "next" &&
      `
      right: -20px;
      top: -110px;
       @media screen and (min-width: 600px) {
       right: 5vh;
       }
      @media screen and (min-width: 768px) {
        top:-255px;
        right: -35px;
      }
      @media screen and (min-width: 1280px) {
        right: 0;
         top: -340px;
      }
      `}
  }
`;
