import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavMobileIcon,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  // const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const burger = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Iqbal Septyan
          </NavLogo>
          <NavMobileIcon onClick={burger}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </NavMobileIcon>
          <NavMenu isOpen={isOpen}>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={burger}
              >
                about
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portofolio"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={burger}
              >
                portofolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="info"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={burger}
              >
                info
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={burger}
              >
                contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
