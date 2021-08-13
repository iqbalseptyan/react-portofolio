import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailNav = styled.nav`
  display: flex;
  position: sticky;
  background: var(--first-color);
  height: 80px;
  top: 0;
  z-index: 1000000;
  list-style: none;
  align-items: center;
  position: -webkit-sticky;
  color: #fff;
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const MonitorWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 50%;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const MonitorImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ContainerScreen = styled.div`
  color: var(--first-color);
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  padding: 24px 24px;
  height: 69%;
  width: 100%;
  top: 5%;
  max-width: 1024px;
  @media screen and (max-width: 1366px) {
    width: 69%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 60%;
    top: 7%;
  }
  @media screen and (max-width: 420px) {
    height: 10%;
    width: 50%;
  }
`;

export const SlideWrapper = styled.div`
  width: 50%;
  padding: 12px 12px;
  @media screen and (max-width: 768px) {
    padding: 8px 8px;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  padding: 12px 12px;
  @media screen and (max-width: 768px) {
    padding: 8px 8px;
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: var(--second-color);
  font-size: 48px;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 420px) {
    font-size: 8vw;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 1.5vw;
  }
  @media screen and (max-width: 420px) {
    font-size: 4vw;
    color: var(--third-color);
  }
  padding: 0 4px;
`;

export const ContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
