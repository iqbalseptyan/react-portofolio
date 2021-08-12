import styled from "styled-components";

export const InfoRow = styled.div`
  color: #334257;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 20px;
  align-items: center;
  text-align: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col2 col1' `};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col1' 'col2 col2'` : `'col2 col2' 'col1 col1'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin: auto;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: auto;
`;

export const InfoImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: left;
  text-transform: capitalize;
  font-size: 64px;
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  text-align: left;
  text-transform: capitalize;
  font-size: 32px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  padding: 0 4px;
`;
