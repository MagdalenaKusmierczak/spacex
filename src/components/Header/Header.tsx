import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};
