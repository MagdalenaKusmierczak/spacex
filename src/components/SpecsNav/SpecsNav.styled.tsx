import styled from "@emotion/styled";

export const Button = styled.button`
  height: 35px;
  position: relative;
  background: none;
  color: inherit;
  padding: 0;
  border: var(--main-border)
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  border-radius: 2px;
border: var(--main-border);
  @media screen and (min-width: 570px) {
    height: 40px;
  }
  &:hover {
    border: var(--accent-border);
  }
`;

export const Menu = styled.div`
  z-index: 2;
  width: 100%;
  position: fixed;
  display: flex;
  text-transform: capitalize;
  background: var(--blured-backgound);
  color: inherit;
  padding: 0;
  border: none;
  min-width: 150px;
  min-height: 50px;
  margin: 11px auto;
  justify-content: center;
  @media screen and (min-width: 768px) {
    min-height: 60px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    width: 1280px;
  }
`;

export const SectionName = styled.span`
  text-transform: capitalize;
  margin: 3px;
  text-align: center;
  font-size: 14px;

  @media screen and (min-width: 570px) {
    margin: 10px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ButtonsWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 90%;
  padding-top: 15px;
  background: var(--blured-backgound);
  @media screen and (min-width: 570px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
    margin-block: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;
