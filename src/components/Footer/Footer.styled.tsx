import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: -1px;
  margin: 0 auto;

  width: 260px;
  color: white;
  background-color: rgba(41, 55, 60, 0.99);
  box-shadow: 0px 0px 15px 20px rgba(41, 55, 60, 0.99);

  @media screen and (min-width: 768px) {
    width: 708px;
  }
  @media screen and (min-width: 1280px) {
    width: 1220px;
  }
`;
export const AddressContainer = styled.address`
  display: flex;
  justify-content: center;
`;
export const AddressList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;
export const AddressItem = styled.li``;
export const Link = styled.a``;
export const Icon = styled.img`
border-radius:50%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotateY(360deg);
    box-shadow: 0px 0px 4px 4px #f0ff3836;
  }
`;
export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
