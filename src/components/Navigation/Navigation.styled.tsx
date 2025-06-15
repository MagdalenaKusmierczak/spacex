import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

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
  color: var(--main-white);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &.active {
    color: var(--accent-color);
  }
  &:hover {
    color: var(--accent-color);
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
