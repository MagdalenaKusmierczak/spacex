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

// Both arrows look very similar - what about merging them into one component with a prop of Enum type, e.g. enum Direction { LEFT, RIGHT }
// And then rendering the chosen arrow?
export const ArrowPre = styled(Arrow)`
  &:before {
    z-index: 1;
    position: absolute;
    content: "←";
    top: 90px;
    left: -30px;
    @media screen and (min-width: 768px) {
      top: 250px;
      left: -30px;
    }
    @media screen and (min-width: 1280px) {
      top: 350px;
      left: 0;
    }
  }
`;

export const ArrowNext = styled(Arrow)`
  &:before {
    position: absolute;
    right: -30px;
    bottom: 95px;
    content: "→";
    @media screen and (min-width: 768px) {
      bottom: 245px;
      right: -30px;
    }
    @media screen and (min-width: 1280px) {
      right: 0;
      bottom: 350px;
    }
  }
`;
