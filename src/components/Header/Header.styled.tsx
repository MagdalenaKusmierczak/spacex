import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
  background-color: rgba(80, 103, 103, 0.5);
  box-shadow: 0px 0px 15px 20px rgba(80, 103, 103, 0.5);
  border: none;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0px;
  }
`;
