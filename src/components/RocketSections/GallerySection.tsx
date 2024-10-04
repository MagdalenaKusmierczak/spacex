import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
const GallerySection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  return (
    <section id="gallery">
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
    </section>
  );
};

export default GallerySection;
