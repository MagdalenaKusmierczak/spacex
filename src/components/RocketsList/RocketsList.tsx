import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { Link } from "react-router-dom";
import { List, ListItem, RocketImage, RocketHeader } from "./RocketList.styled";

const RocketsList: FC<{ rockets: Rocket[] }> = ({ rockets }) => {
  //Randomizng selection of images
  const randomIndex = (arr: Array<string>) => {
    const arrLength = arr.length;
    const randomizedIndex = Math.floor(Math.random() * arrLength);
    return randomizedIndex;
  };

  return (
    <List>
      {rockets.map((rocket: Rocket) => (
        <ListItem key={rocket.id}>
          <Link to={`/rocket/${rocket.id}`}>
            <RocketImage
              alt={rocket.name}
              src={rocket.flickr_images[randomIndex(rocket.flickr_images)]}
            />
          </Link>
          <RocketHeader>{rocket.name}</RocketHeader>
        </ListItem>
      ))}
    </List>
  );
};
export default RocketsList;
