import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 800px;
  width: 100%;
  color: #fff;
`;

export const HeroBg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BgShadow = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const HeroContent = styled.div`
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroH1 = styled.h1`
  color: #66de93;
  font-size: 48px;
  text-transform: capitalize;
  margin-bottom: 20px;
`;

export const HeroH2 = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;
