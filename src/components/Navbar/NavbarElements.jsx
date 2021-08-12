import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: sticky;
  background: #334257;
  height: 80px;
  top: 0;
  display: flex;
  z-index: 1000000;
  list-style: none;
  align-items: center;
  position: -webkit-sticky;
  color: #fff;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  align-items: center;
  z-index: 1;
`;

export const NavLogo = styled(LinkS)`
  display: flex;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const NavMobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    position: absolute;
    right: 24px;
    animation: ${({ isOpen }) => (isOpen ? "mymove 2s infinite" : "none")};
    @keyframes mymove {
      0% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  justify-content: space-around;
  width: 40%;
  display: flex;
  transition-timing-function: ease-in-out;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 80px;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #000;
    opacity: 0.7;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  align-items: center;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  height: 100%;
  &.active {
    border-bottom: 3px solid #28ffbf;
    color: #28ffbf;
  }
`;
