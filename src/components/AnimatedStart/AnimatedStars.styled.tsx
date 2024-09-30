import styled, { keyframes } from "styled-components";
//Animations

const shooting = keyframes`

    0%
    {
        transform: rotate(315deg) translateX(0);
        opacity: 1;
    }
    70%
    {
        opacity: 1;
    }
    100%
    {
        transform: rotate(315deg) translateX(-1000px);
        opacity: 0;
    }
`;

export const Sky = styled.div`
  z-index: -1;
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const DefaultSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
  animation: ${shooting} infinite linear 30s;
  &: before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }
`;
// .span
export const StarOne = styled(DefaultSpan)<{ isShooting: boolean }>`
  top: 0;
  right: 0;
  left: initial;
  animation-delay: 0.5s;
  animation-duration:${(star) => (star.isShooting ? "2s" : "0s")};
 
`;
export const StarTwo = styled(DefaultSpan)<{ isShooting: boolean }>`
  top: 0;
  right: 80px;
  left: initial;
  animation-delay: 2.5s;
  animation-duration: ${(star) => (star.isShooting ? "3s" : "0s")};
`;
export const StarThree = styled(DefaultSpan)<{ isShooting: boolean }>`
  top: 80;
  right: -10px;
  left: initial;
  animation-delay: 1s;
  animation-duration: ${(star) => (star.isShooting ? "2.5s" : "0s")};
`;
export const StarFour = styled(DefaultSpan)<{ isShooting: boolean }>`
  top: 0;
  right: 180px;
  left: initial;
  animation-delay: 1.5s;
  animation-duration: ${(star) => (star.isShooting ? "2s" : "0s")};
`;
export const StarFive = styled(DefaultSpan)<{ isShooting: boolean }>`
  top: 0;
  right: 400px;
  left: initial;
  animation-delay: 2s;
  animation-duration: ${(star) => (star.isShooting ? "3s" : "0s")};
`;
