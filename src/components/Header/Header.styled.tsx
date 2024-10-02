import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
  background-color: rgba(41, 55, 60, 0.9);
  box-shadow: 0px 0px 15px 20px rgba(41, 55, 60, 0.9);
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 0px;
  }
`;
