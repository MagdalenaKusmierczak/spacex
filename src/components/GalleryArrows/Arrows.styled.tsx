import styled from "styled-components";

export const Arrow = styled.div`
  border-radius: 50%;
  cursor: pointer;
  color: #ffc41f;
  font-size: 20px;
  line-height: 1;
  font-family: "slick";
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

export const ArrowPre = styled(Arrow)`
  &:before {
    z-index: 1;
    position: absolute;
    content: "←";
    top: 80px;
    left: -30px;
    @media screen and (min-width: 768px) {
      top: 250px;
      left: -30px;
    }
    @media screen and (min-width: 1280px) {
      top: 365px;
      left: 0px;
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
      bottom: 250px;
      right: -30px;
    }
    @media screen and (min-width: 1280px) {
      right: 0px;
      bottom: 370px;
    }
  }
`;
