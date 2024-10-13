import { FC } from "react";
import ArrowProps from "../../service/Types/ArrowsTypes";
import { ArrowNext } from "./Arrows.styled";

const NextArrow: FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return <ArrowNext onClick={onClick} />;
};

export default NextArrow;
