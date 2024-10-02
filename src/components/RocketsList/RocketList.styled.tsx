import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  margin-top: 35px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 10px dotted rgba(41, 55, 60, 0.9);
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 20%;
`;
export const RocketImage = styled.img`
  border-radius: 50%;
  border: 10px solid #fffff;
  width: 250px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 600px;
    &:hover {
      transform: rotateY(360deg);
      box-shadow: 0px 0px 30px 30px #f0ff3836;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 700px;
  }
`;
export const RocketHeader = styled.h2`
  margin: 0;
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
