import { FC } from "react";
import ArrowProps from "../../service/types/ArrowsTypes";
import { ArrowPre } from "./Arrows.styled";

const PrevArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowPre onClick={onClick} />;
};

export default PrevArrow;
