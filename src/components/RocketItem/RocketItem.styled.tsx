import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  border: var(--main-border);
  overflow: hidden;

  &:hover {
    border: var(--accent-border);
  }
`;

export const RocketImage = styled.img`
  display: block;
  width: 250px;
  height: 160px;
  padding: 0;
  margin: 0;
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
  margin: 0 0;
  height: auto;
`;
export const RocketHeader = styled.h2`
  margin: 20px 0;
  width: 200px;
  text-align: center;
  color: var(--accent-color);
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
