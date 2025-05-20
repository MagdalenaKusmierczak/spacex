import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: #131319e0;
  z-index: 4;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #faf9f6;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
