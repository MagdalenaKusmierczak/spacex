import { NavItem, NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem to="../rocket/Falcon1">Falcon 1</NavItem>
      <NavItem to="../rocket/Falcon9">Falcon 9</NavItem>
      <NavItem to="../rocket/FalconHeavy">Falcon Heavy</NavItem>
      <NavItem to="../rocket/Starship">Starship</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
