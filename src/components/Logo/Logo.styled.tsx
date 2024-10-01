import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #f0ff3836;
  box-shadow: 0px 0px 8px 8px #f0ff3836;
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
    &:hover {
      transform: rotate(360deg);
      transition: all 0.3s ease-in-out 0s;
    background-color: #ffc41f;
    box-shadow: 0px 0px 8px 8px #fada7e;}
    
  }
`;
