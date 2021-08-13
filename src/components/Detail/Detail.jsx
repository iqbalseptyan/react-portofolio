import React from "react";
import { Container } from "../ContainerElements";
import {
  ContainerMobile,
  ContainerScreen,
  ContentWrapper,
  DetailNav,
  MonitorImg,
  MonitorWrapper,
  NavLogo,
  NavWrapper,
  SlideWrapper,
  Subtitle,
  Title,
} from "./DetailElements";
import monitor from "../../images/monitor.svg";
import ImageGallery from "react-image-gallery";

const Detail = () => {
  const images = [
    {
      original: "https://picsum.photos/300/200",
      thumbnail: "https://picsum.photos/300/200 ",
    },
    {
      original: "https://picsum.photos/300/200",
      thumbnail: "https://picsum.photos/300/200 ",
    },
    {
      original: "https://picsum.photos/300/200",
      thumbnail: "https://picsum.photos/300/200 ",
    },
    {
      original: "https://picsum.photos/300/200",
      thumbnail: "https://picsum.photos/300/200 ",
    },
  ];

  return (
    <>
      <DetailNav>
        <NavWrapper>
          <NavLogo to="/">Iqbal Septyan</NavLogo>
        </NavWrapper>
      </DetailNav>
      <Container>
        {/* Mobile Mode */}
        <ContainerMobile>
          <ImageGallery items={images} />
          <Title>Lorem Ipsum.</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            laudantium deserunt ipsum ut doloremque fuga ea veritatis, ipsa
            doloribus molestiae expedita temporibus deleniti facere, pariatur
            maxime magnam labore maiores fugiat.
          </Subtitle>
        </ContainerMobile>
        <MonitorWrapper>
          <MonitorImg src={monitor} />
          <ContainerScreen>
            <SlideWrapper>
              <ImageGallery items={images} />
            </SlideWrapper>
            <ContentWrapper>
              <Title>Lorem Ipsum.</Title>
              <Subtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                laudantium deserunt ipsum ut doloremque fuga ea veritatis, ipsa
                doloribus molestiae expedita temporibus deleniti facere,
                pariatur maxime magnam labore maiores fugiat.
              </Subtitle>
            </ContentWrapper>
          </ContainerScreen>
        </MonitorWrapper>
      </Container>
    </>
  );
};

export default Detail;
