import { ArrowPre } from "./Arrows.styled";
import { FC } from "react";

type Props = {
  onClick?: () => void;
};

const PrevArrow: FC<Props> = (props) => {
  const {onClick} = props;
  return (
    <ArrowPre onClick={onClick} />
  );
};
export default PrevArrow;
