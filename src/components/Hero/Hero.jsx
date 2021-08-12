import React from "react";
import hero from "../../images/hero.svg";
import Typed from "react-typed";
import {
  HeroContainer,
  HeroBg,
  HeroH1,
  HeroH2,
  HeroContent,
  BgShadow,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg src={hero} />
      <BgShadow />
      <HeroContent>
        <HeroH1>Website Developer </HeroH1>
        <HeroH2>
          <Typed
            strings={["Front-End Web Developer", "Back-End Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </HeroH2>
        <Button
          darkbg="true"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
        >
          Contact Me
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
