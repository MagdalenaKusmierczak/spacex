import { FC } from "react";
import { ArrowProps } from "../../service/types/ArrowsTypes";
import { ArrowNext } from "./Arrows.styled";

export const NextArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowNext onClick={onClick} />;
};
