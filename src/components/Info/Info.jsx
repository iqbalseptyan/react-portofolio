import React from "react";
import { Container } from "../ContainerElements";
import {
  Column1,
  Column2,
  InfoImg,
  InfoRow,
  Subtitle,
  Title,
} from "./InfoElements";
import infoimg from "../../images/infoimg.svg";
const Info = () => {
  return (
    <Container id="info" lightBg>
      <InfoRow imgStart={true}>
        <Column1>
          <InfoImg src={infoimg} />
        </Column1>
        <Column2>
          <Title>Lorem Ipsum.</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            architecto voluptas quasi pariatur laborum corrupti et cum numquam,
            aspernatur, culpa quaerat recusandae dolore eligendi, corporis
            inventore. Aliquid quia facilis vel.
          </Subtitle>
        </Column2>
      </InfoRow>
    </Container>
  );
};

export default Info;
