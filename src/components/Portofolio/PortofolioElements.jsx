import styled from "styled-components";

export const PortofolioContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#334257")};
  justify-content: space-around;
`;

export const PortofolioSlider = styled.div`
  width: 100%;
`;

export const PortofolioWrapper = styled.div`
  margin: auto;
  width: 80%;
  padding: 8px 8px;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortofolioCard = styled.div`
  background: #fff;
  border-radius: 10px;
`;

export const CardImg = styled.img`
  height: 200px;
  width: 100%;
`;

export const CardHeadLine = styled.h1`
  color: #66de93;
  text-align: left;
  font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 420px) {
    font-size: 24px;
  }
`;
export const CardDescription = styled.p`
  color: #fff;
  text-align: left;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;
