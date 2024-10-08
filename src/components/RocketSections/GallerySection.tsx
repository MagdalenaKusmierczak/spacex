import { FC } from "react";
import Rocket from "../../service/Interfaces/RocketInterface";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionWrapper, ImageWrapper, Image } from "./RocketSections.styled";
import PrevArrow from "../GalleryArrows/PrevArrow";
import NextArrow from "../GalleryArrows/NextArrow";

const GallerySection: FC<{ rocketData: Rocket }> = (props) => {
  const rocket = props.rocketData;
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <SectionWrapper id="gallery">
      <Slider {...settings}>
        {rocket.flickr_images.map((image) => (
          <ImageWrapper key={rocket.flickr_images.indexOf(image)}>
            <Image src={image} alt={rocket.rocket_name} />
          </ImageWrapper>
        ))}
      </Slider>
    </SectionWrapper>
  );
};

export default GallerySection;
