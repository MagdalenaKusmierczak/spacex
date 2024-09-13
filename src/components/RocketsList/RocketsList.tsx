import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";

const RocketsList: FC<{ rocketsData: Rocket[] }> = ({ rocketsData }) => {
  return (
    <ul>
      {rocketsData.map((rocket: Rocket) => (
        <li key={rocket.id}></li>
      ))}
    </ul>
  );
};
export default RocketsList;
