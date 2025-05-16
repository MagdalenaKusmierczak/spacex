import { FC } from "react";
import { ArrowStyled } from "./Arrows.styled";

export interface ArrowProps {
  onClick?: () => void;
  $direction: "prev" | "next";
}

export const Arrow: FC<ArrowProps> = (props) => {
  const { onClick, $direction } = props;
  return <ArrowStyled onClick={onClick} $direction={$direction} />;
};
