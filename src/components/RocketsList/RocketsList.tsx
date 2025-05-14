import { FC} from "react";
import Rocket from "../../service/types/RocketInterface";
import { RocketItem } from "../RocketItem/RocketItem";
import { List} from "./RocketList.styled";


const RocketsList: FC<{ rockets: Rocket[] }> = ({ rockets }) => {

  return (
    <List>
      {rockets.map((rocket: Rocket) => (
        <RocketItem rocket={rocket} key={rocket.id} />
      ))}
    </List>
  );
};
export default RocketsList;
