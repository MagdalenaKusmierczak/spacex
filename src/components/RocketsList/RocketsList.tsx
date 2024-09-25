import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { Link } from "react-router-dom";

const RocketsList: FC<{ rockets: Rocket[] }> = ({ rockets }) => {
  //Randomizng selection of images
  const randomIndex = (arr: Array<string>) => {
    const arrLength = arr.length;
    const randomizedIndex = Math.floor(Math.random() * arrLength);
    return randomizedIndex;
  };

  return (
    <ul>
      {rockets.map((rocket: Rocket) => (
        <li key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
         <Link to={`/rocket/${rocket.rocket_id}`}><img
            alt={rocket.rocket_name}
            src={rocket.flickr_images[randomIndex(rocket.flickr_images)]}
          /></Link> 
        </li>
      ))}
    </ul>
  );
};
export default RocketsList;
