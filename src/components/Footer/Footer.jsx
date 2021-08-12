import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopyright>
          © Copyright 2021 Iqbal Septyan. All rights reserve
        </FooterCopyright>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaInstagramSquare />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebookSquare />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaWhatsappSquare />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaGithubSquare />
          </SocialIconLink>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
