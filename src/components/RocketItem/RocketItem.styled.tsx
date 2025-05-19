import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  box-shadow:
    0 0 5px 4px #f0ff3836 inset,
    0 0 20px 10px #f0ff3836;
  overflow: hidden;

  &:hover {
    box-shadow:
      0 0 10px 3px #ffc41f inset,
      0 0 20px 10px #ffc41f;
  }
`;

export const RocketImage = styled.img`
  width: 250px;
  height: 160px;
  padding: 0 0;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 360px;
  }
  @media screen and (min-width: 1280px) {
    width: 700px;
    height: 460px;
  }
`;

export const RocketLink = styled(Link)`
  margin: 0;
  padding: 0 5px;
`;
export const RocketHeader = styled.h2`
  margin: 20px 0;
  width: 200px;
  text-align: center;
  color: #ffc41f;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
