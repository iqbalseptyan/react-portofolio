import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 1200px;
  width: 100%;
  padding: 48px 80px;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#334257")};
  @media screen and (max-width: 1366px) {
    transition: 0.5s all ease;
    width: 100%;
    height: 800px;
    background: ${({ lightBg }) => (lightBg ? "#fff" : "#334257")};
  }
  @media screen and (max-width: 768px) {
    height: 1000px;
  }
  @media screen and (max-width: 420px) {
    /* display: block; */
  }
`;
