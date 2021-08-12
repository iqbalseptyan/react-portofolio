import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #334257;
  height: 80px;
  align-items: center;
  display: flex;
`;

export const FooterContent = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
`;

export const FooterCopyright = styled.small`
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-self: space-evenly;
  color: #fff;
  font-size: 24px;
`;
