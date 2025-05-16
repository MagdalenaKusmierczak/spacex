import styled from "styled-components";

// Just a NIT - think about using tools like Stylelint - that way you can e.g. order properties within CSS
// It's much easier to read it then!
export const Container = styled.div`
  z-index: 1;
  position: relative;
  margin: 0 auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.2);
`;
