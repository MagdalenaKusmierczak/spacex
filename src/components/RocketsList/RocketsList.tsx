import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";

const RocketsList: FC<{ rockets: Rocket[] }> = ({ rockets }) => {
  return (
    <ul>
      {rockets.map((rocket: Rocket) => (
        <li key={rocket.id}></li>
      ))}
    </ul>
  );
};
export default RocketsList;
