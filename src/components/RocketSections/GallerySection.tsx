import { FC, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import { Arrow } from "../GalleryArrows/Arrow";
import { Rocket } from "../../service/interfaces/RocketInterface";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionWrapper, ImageWrapper, Image } from "./RocketSections.styled";

export interface Slide {
  src: string;
  alt: string;
}

export const GallerySection: FC<{ rocketData: Rocket }> = ({ rocketData }) => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<Slide[]>([]);

  const rocket = rocketData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <Arrow $direction="prev" />,
    nextArrow: <Arrow $direction="next" />,
  };

  const handleImageClick = (image: string) => {
    const slide: Slide = {
      src: image,
      alt: rocket.name,
    };
    setSlides([slide]);
    setOpen(true);
  };

  return (
    <SectionWrapper>
      <Slider {...settings}>
        {rocket.flickr_images.map((image) => (
          <ImageWrapper key={rocket.flickr_images.indexOf(image)}>
            <Image
              src={image}
              alt={rocket.name}
              onClick={() => handleImageClick(image)}
            />
          </ImageWrapper>
        ))}
      </Slider>
      {open && (
        <Lightbox
          carousel={{ finite: slides.length <= 1 }}
          render={{
            buttonPrev: slides.length <= 1 ? () => null : undefined,
            buttonNext: slides.length <= 1 ? () => null : undefined,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      )}
    </SectionWrapper>
  );
};
