import styled from "styled-components";

export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  margin-block: 0;
  border-bottom: 1px solid #faf9f6;
`;

export const GalleryWrapper = styled(SectionWrapper)`
  border: none;
`;

export const GridWrapper = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageWrapper = styled.div``;

export const PrimaryHeader = styled.h1`
  margin-block: 1em;
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SecondaryHeader = styled.h2`
  margin: 0;
  padding: 25px;
  text-align: center;
  font-size: 19px;
  color: #f4bf69;
  border-bottom: 1px solid #faf9f6;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 23px;
  }
`;

export const TernaryHeader = styled.h3`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  color: #f4bf69;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const QuaternaryHeader = styled.h4`
  margin: 10px;
  text-align: center;
  font-size: 16px;
  color: #f4bf69;
  margin: 0 auto;
  font-style: italic;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    width: 75%;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 400;
  color: rgb(250, 249, 246);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const MoreParagraph = styled(StyledParagraph)`
  margin-left: 0;
  text-align: center;
  a {
    color: #f4bf69;
    text-decoration: none;
    padding-inline: 8px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  padding-left: 10px;
  text-transform: capitalize;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-inline: 0;
  border-bottom: 1px solid #faf9f6;
  @media screen and (min-width: 768px) {
    text-align: left;
    padding-bottom: 40px;
  }
`;

export const OutsideList = styled(List)`
  border-bottom: none;
  padding: 0;
`;

export const InsideItem = styled.li`
  @media screen and (min-width: 768px) {
    border-right: 1px solid #faf9f6;
  }
`;

export const GridList = styled(List)`
  border-bottom: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridListPayload = styled(GridList)`
  > li {
    border-top: 1px solid #faf9f6;
  }
  @media screen and (min-width: 768px) {
    > li {
      border-top: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid #faf9f6;
    }
  }
`;

export const GridListSecondary = styled(GridList)`
  grid-template-columns: repeat(2, 1fr);
`;

export const Grid = styled.div`
  border-bottom: none;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridFragment = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    border-top: 1px solid #faf9f6;
    &:not(:last-child) {
      border-right: 1px solid #faf9f6;
    }
  }
`;

export const StagesList = styled(List)`
  border-bottom: 1px solid #faf9f6;
  border-radius: 0;
`;

export const StagesItem = styled.li`
  padding-block: 10px;
  border-bottom: 1px solid #faf9f6;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      border-right: 1px solid #faf9f6;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
  width: 260px;
  height: 195px;
  @media screen and (min-width: 768px) {
    width: 700px;
    height: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 1024px;
    height: 700px;
  }
`;
