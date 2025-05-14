import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Rocket from "../../service/types/RocketInterface";
import {
  ListItem,
  RocketImage,
  RocketHeader,
} from "../RocketItem/RocketItem.styled";

//Randomizng selection of images
const randomIndex = (arr: string[]) => {
  const arrLength = arr.length;
  const randomizedIndex = Math.floor(Math.random() * arrLength);
  return randomizedIndex;
};

const stringStripe = (str: string) => {
  return str.replace(/\s+/g, "");
};

export const RocketItem: FC<{ rocket: Rocket }> = ({ rocket }) => {
  //Preloading images
  useEffect(() => {
    rocket.flickr_images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [rocket]);

  return (
    <ListItem key={`${rocket.id}/${rocket.name}`}>
      <Link to={`../rocket/${stringStripe(rocket.name)}`}>
        <RocketImage
          alt={rocket.name}
          src={rocket.flickr_images[randomIndex(rocket.flickr_images)]}
        />
      </Link>
      <RocketHeader>{rocket.name}</RocketHeader>
    </ListItem>
  );
};
