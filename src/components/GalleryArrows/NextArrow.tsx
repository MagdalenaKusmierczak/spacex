import { ArrowNext } from "./Arrows.styled";
import { FC } from "react";

type Props = {
  onClick?: () => void;
};

const NextArrow: FC<Props> = (props) => {
  const {onClick } = props;
  return (
    <ArrowNext onClick={onClick} />
  );
};

export default NextArrow;