import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 150px auto 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.2);
  @media screen and (min-width: 768px) {
    margin: 100px auto 0;
  }
`;
