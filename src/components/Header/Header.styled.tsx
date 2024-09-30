import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
  background-color: rgba(80, 103, 103, 0.5);
  box-shadow: 0px 0px 15px 20px rgba(80, 103, 103, 0.5);
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 0px;
  }
`;
