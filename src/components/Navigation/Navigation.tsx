import { NavItem, NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      {/* Links should always be understandable and - if possible -
        present meaningful resources. Instead of using IDs here, I'd just use rocket names*/}
      <NavItem to="../rocket/5e9d0d95eda69955f709d1eb">Falcon 1</NavItem>
      <NavItem to="../rocket/5e9d0d95eda69973a809d1ec">Falcon 9</NavItem>
      <NavItem to="../rocket/5e9d0d95eda69974db09d1ed">Falcon Heavy</NavItem>
      <NavItem to="../rocket/5e9d0d96eda699382d09d1ee">Starship</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
