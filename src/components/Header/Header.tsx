import Navigation from "components/Navigation/Navigation";
import Logo from "components/Logo/Logo";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
