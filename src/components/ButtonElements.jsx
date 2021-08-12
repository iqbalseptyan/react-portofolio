import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  z-index: 20;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  padding: 14px 48px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    background-color: ${({ darkbg }) => (darkbg ? "#000" : "#66DE93")};
    transform: scale(1.1);
  }
`;
