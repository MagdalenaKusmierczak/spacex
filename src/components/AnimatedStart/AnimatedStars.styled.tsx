import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  position: fixed;
  width: 50vw;
  height: 100vh;
  opacity: 0.3;
  overflow: hidden;
`;

export const DefaultSpan = styled.span`
  position: absolute;
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
  top: -100px;
  right: ${(props) => props.$position};
  animation-delay: ${(props) => (props.$shoot ? props.$shootDelay : "0s")};
  animation-duration: ${(props) => (props.$shoot ? props.$shootTime : "0s")};
`;
