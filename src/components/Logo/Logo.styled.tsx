import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
   background-color:#908058;
  box-shadow: 0 0 8px 8px #f0ff3836;
  border-radius: 50%; // Repeated border-radius
  transition: all 0.3s ease-in-out 0s;
    &:hover {
    transform: rotate(260deg);
    border-color: #ffc41f;
    box-shadow: 0 0 10px 0 #ffc41f inset, 0 0 10px 4px #ffc41f;}
  }
`;
