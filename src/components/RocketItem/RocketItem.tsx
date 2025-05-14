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

export const RocketItem: FC<{ rocket: Rocket }> = ({ rocket }) => {
  //Preloading images
  useEffect(() => {
    rocket.flickr_images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [rocket]);

  return (
    <ListItem key={rocket.id}>
      {/* Think here on how to create meaningful links without basing on IDs (or using meaningful IDs)
     You can e.g. create a mapping between API ID and URL ID
     This makes sense as there are not so many rocket items here and human-readable URLs are always nice ;)
    */}
      <Link to={`../rocket/${rocket.id}`}>
        <RocketImage
          alt={rocket.name}
          src={rocket.flickr_images[randomIndex(rocket.flickr_images)]}
        />
      </Link>
      <RocketHeader>{rocket.name}</RocketHeader>
    </ListItem>
  );
};
