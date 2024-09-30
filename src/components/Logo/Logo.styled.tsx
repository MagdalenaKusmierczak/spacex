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
  &:hover {
    background-color: #ffc41f;
    box-shadow: 0px 0px 8px 8px #fada7e;
  }
`;
