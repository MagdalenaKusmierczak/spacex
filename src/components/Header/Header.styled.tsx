import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: var(--blured-backgound);
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  padding: 15px 20px;
  border-bottom: var(--main-border);
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
