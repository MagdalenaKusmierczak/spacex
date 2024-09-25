import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/rocket/falcon1">Falcon 1</NavLink>
      <NavLink to="/rocket/falcon9">Falcon 9</NavLink>
      <NavLink to="/rocket/falconheavy">Falcon Heavy</NavLink>
      <NavLink to="/rocket/starship">Starship</NavLink>
    </nav>
  );
};

export default Navigation;
