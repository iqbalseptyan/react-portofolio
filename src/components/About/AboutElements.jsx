import styled from "styled-components";

export const AboutRow = styled.div`
  color: #334257;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 20px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2' `};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin: auto;
  width: 50%;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: auto;
`;

export const AboutImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--second-color);
  text-align: justify;
  text-transform: capitalize;
  font-size: 64px;
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 420px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  text-align: left;
  font-size: 32px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;
