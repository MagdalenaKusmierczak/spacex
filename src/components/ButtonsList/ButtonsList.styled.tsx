import styled from "styled-components";

export const Button = styled.button`
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
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #ffc41f inset, 0 0 10px 4px #ffc41f;
  &:hover {
    box-shadow: 0 0 40px 40px #29373ce6 inset, 0 0 0 0 #29373ce6;
  }
`;
export const MenuButton = styled.div`
  text-transform: capitalize;
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
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #ffc41f inset, 0 0 10px 4px #ffc41f;
  min-width: 150px;
  min-height: 50px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 40px 40px #29373ce6 inset, 0 0 0 0 #29373ce6;
  }
  @media screen and (min-width: 768px) {
    min-height: 60px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;
export const SectionName = styled.span`
  margin: 10px;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;
export const ButtonsWrapper = styled.div`
  margin-block: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-block: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const MenuWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;
