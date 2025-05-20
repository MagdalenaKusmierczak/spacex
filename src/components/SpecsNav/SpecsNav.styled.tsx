import styled from "styled-components";

export const Button = styled.button`
  height: 35px;
  position: relative;
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-color: #ffc41f;
  transition: all 150ms ease-in-out;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 #faf9f6;
  &:hover {
    box-shadow:
      0 0 2px 0 #ffc41f inset,
      0 0 7px 2px #ffc41f;
  }
  @media screen and (min-width: 570px) {
    height: 40px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  background: #131319e0;
  color: inherit;
  padding: 0;
  border: none;
  display: flex;

  min-width: 150px;
  min-height: 50px;
  @media screen and (min-width: 768px) {
    min-height: 60px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
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

export const ButtonsWrapper = styled.div`
  margin-block: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
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
`;
