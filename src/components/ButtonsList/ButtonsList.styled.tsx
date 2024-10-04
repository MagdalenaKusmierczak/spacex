import styled from "styled-components";
import arrow from "../../assets/down-arrow.png";

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:after {
    content: "";
    width: 20px;
    height: 18px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
    margin-left: 0.75em;
    transition: 0.2s;
  }
`;
export const SectionName = styled.span`
  display: inline;
  margin-block: 1em;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
