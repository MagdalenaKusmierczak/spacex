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
  color: rgb(250, 249, 246);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &.active {
    color: #ffc41f;
  }
  &:hover {
    color: #fada7e;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
