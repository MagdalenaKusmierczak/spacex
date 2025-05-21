import { FC, useEffect } from "react";
import { Rocket } from "../../service/interfaces/RocketInterface";
import {
  ListItem,
  RocketImage,
  RocketLink,
  RocketHeader,
} from "../RocketItem/RocketItem.styled";

const randomIndex = (arr: string[]) => {
  const arrLength = arr.length;
  const randomizedIndex = Math.floor(Math.random() * arrLength);
  return randomizedIndex;
};

const stringStripe = (str: string) => {
  return str.replace(/\s+/g, "");
};

export const RocketItem: FC<{ rocket: Rocket }> = ({ rocket }) => {
  useEffect(() => {
    rocket.flickr_images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [rocket]);

  return (
    <ListItem key={`${rocket.id}/${rocket.name}`}>
      <RocketHeader>{rocket.name}</RocketHeader>
      <RocketLink to={`../rocket/${stringStripe(rocket.name)}`}>
        <RocketImage
          alt={rocket.name}
          src={rocket.flickr_images[randomIndex(rocket.flickr_images)]}
          loading="lazy"
        />
      </RocketLink>
    </ListItem>
  );
};
