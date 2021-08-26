import { CarouselType } from "../types";

import './styles.scss'
export const ImageCarousel = (props: CarouselType) => {
  return <img src={props.src} alt={props.alt} className="imgCarousel" />;
};
