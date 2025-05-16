import { FC } from "react";
import { ArrowProps } from "../../service/types/ArrowsTypes";
import { ArrowPre } from "./Arrows.styled";

export const PrevArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowPre onClick={onClick} />;
};
