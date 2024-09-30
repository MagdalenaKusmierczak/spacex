import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
export const NavItem = styled(NavLink)`
  color: rgb(250, 249, 246);
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  &.active {
    color: #ffc41f;
  }
  &:hover {
    color: #fada7e;
  }
`;
