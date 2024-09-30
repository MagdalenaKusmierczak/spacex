import logo from "../../assets/logo.png";
import { ImageWrapper } from "./Logo.styled";
const Logo = () => {
  return (
    <ImageWrapper>
      <img alt="Rocket logo" src={logo} height="70" width="70" />
    </ImageWrapper>
  );
};
export default Logo;
