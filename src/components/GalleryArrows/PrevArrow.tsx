import { FC } from "react";
import { ArrowPre } from "./Arrows.styled";

export interface ArrowProps {
  onClick?: () => void;
}
export const PrevArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowPre onClick={onClick} />;
};
