import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: relative;
  margin: 0 auto;
  padding: 30px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 3px 21px 11px rgba(50, 50, 50, 0.3);
  background-color: rgba(50, 50, 50, 0.3);
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
