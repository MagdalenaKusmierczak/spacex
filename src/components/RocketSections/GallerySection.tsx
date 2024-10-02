import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import { SecondHeader, Summary } from "./RocketSections.styled";

const GallerySection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section>
      <details>
        <Summary>
          <SecondHeader>Gallery</SecondHeader>
        </Summary>
        <ul>
          {rocket.flickr_images.map((image) => (
            <li key={rocket.flickr_images.indexOf(image)}>
              <img
                src={image}
                alt={rocket.rocket_name}
                height="256"
                width="256"
              />
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export default GallerySection;
