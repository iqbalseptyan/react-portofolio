import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #334257;
  height: 80px;
  align-items: center;
  display: flex;
  padding: 24px 64px;
  @media screen and (max-width: 420px) {
    padding: 12px 32px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
`;

export const FooterCopyright = styled.small`
  color: #fff;
  width: 100%;
  font-size: 1vw;

  @media screen and (max-width: 420px) {
    font-size: 4vw;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  align-items: center;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-self: space-evenly;
  color: #fff;
  font-size: 2vw;

  @media screen and (max-width: 420px) {
    font-size: 4vw;
  }
`;
