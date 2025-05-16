import styled, { keyframes } from "styled-components";

const shooting = keyframes`
    0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
    }
    70% {
    opacity: 1;
    }
    100% {
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
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 255, 255, 0.1);
  animation: ${shooting} 5s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }
`;

export const Star = styled(DefaultSpan)<{
  $shoot: boolean;
  $shootTime: string;
  $shootDelay: string;
  $position: string;
}>`
  top: 0;
  right: ${(props) => props.$position};
  left: initial;
  animation-delay: ${(props) => (props.$shoot ? props.$shootDelay : "0s")};
  animation-duration: ${(props) => (props.$shoot ? props.$shootTime : "0s")};
`;
