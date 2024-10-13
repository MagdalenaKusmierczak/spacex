import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ImageWrapper } from "./Logo.styled";

const Logo = () => {
  return (
    <ImageWrapper>
      <Link to="/">
        <img alt="Rocket logo" src={logo} height="70" width="70" />
      </Link>
    </ImageWrapper>
  );
};

export default Logo;
