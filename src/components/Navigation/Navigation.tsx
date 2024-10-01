import { NavItem, NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem to="/rocket/falcon1">Falcon 1</NavItem>
      <NavItem to="/rocket/falcon9">Falcon 9</NavItem>
      <NavItem to="/rocket/falconheavy">Falcon Heavy</NavItem>
      <NavItem to="/rocket/starship">Starship</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
