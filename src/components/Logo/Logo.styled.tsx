import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius:50%;
  background-color: var(--logo-color);
  transition: all 0.3s ease-in-out 0s;
    &:hover {
    transform: rotate(260deg);
    border-color:var(--accent-color);
    box-shadow: 0 0 10px 0 var(--accent-color) inset, 0 0 10px 4px var(--accent-color);}
  }
`;
