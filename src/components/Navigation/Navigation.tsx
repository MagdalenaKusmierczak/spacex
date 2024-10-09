import { NavItem, NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem to="/rocket/5e9d0d95eda69955f709d1eb">Falcon 1</NavItem>
      <NavItem to="/rocket/5e9d0d95eda69973a809d1ec">Falcon 9</NavItem>
      <NavItem to="/rocket/5e9d0d95eda69974db09d1ed">Falcon Heavy</NavItem>
      <NavItem to="/rocket/5e9d0d96eda699382d09d1ee">Starship</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
