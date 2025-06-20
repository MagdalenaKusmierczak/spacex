import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  color: var(--main-white);
  padding: 40px 0 25px;
  margin-top: 50px;
  border-top: var(--main-border);
  width: 100%;
  background-color: #1212126b;
  @media screen and (min-width: 1280px) {
    width: 1280px;
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
  margin: 0 15px;
`;

export const Icon = styled.img`
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotateY(360deg);
    box-shadow: 0 0 4px 4px #f0ff3836;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
