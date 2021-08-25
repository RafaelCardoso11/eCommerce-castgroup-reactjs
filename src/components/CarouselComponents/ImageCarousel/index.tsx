import { CarouselType } from "../types";

export const ImageCarousel = (props: CarouselType) => {
  return <img src={props.src} alt={props.alt} />;
};
