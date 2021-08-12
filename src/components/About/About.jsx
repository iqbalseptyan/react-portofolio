import React from "react";
import icon from "../../images/iqbalseptyan.svg";
import { Container } from "../ContainerElements";
import {
  AboutImg,
  AboutRow,
  Column1,
  Column2,
  Subtitle,
  Title,
} from "./AboutElements";

const About = () => {
  return (
    <Container id="about" lightBg>
      <AboutRow>
        <Column1>
          <Title>About Me</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            commodi molestiae aspernatur voluptates, itaque reprehenderit
            temporibus architecto repellendus quasi vitae illum ratione earum
            sapiente voluptas quae provident facilis sequi. Adipisci!
          </Subtitle>
        </Column1>
        <Column2>
          <AboutImg src={icon} />
        </Column2>
      </AboutRow>
    </Container>
  );
};

export default About;
