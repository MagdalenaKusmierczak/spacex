import { FC } from "react";
import { ArrowNext } from "./Arrows.styled";

export interface ArrowProps {
  onClick?: () => void;
}

export const NextArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowNext onClick={onClick} />;
};
