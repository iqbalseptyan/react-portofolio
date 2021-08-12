import React from "react";
import {
  CardDescription,
  CardHeadLine,
  CardImg,
  PortofolioCard,
  PortofolioContainer,
  PortofolioSlider,
  PortofolioWrapper,
} from "./PortofolioElements";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../images/iqbalseptyan.svg";
import { Container } from "../ContainerElements";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Portofolio = (props) => {
  return (
    <Container id="portofolio">
      <PortofolioContainer>
        <PortofolioSlider>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carousel-item-padding-40-px"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <PortofolioWrapper>
              <PortofolioCard>
                <CardImg src={img} alt="Avatar" />
              </PortofolioCard>
              <CardHeadLine>Lorem Ipsum.</CardHeadLine>
              <CardDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </CardDescription>
            </PortofolioWrapper>
            <PortofolioWrapper>
              <PortofolioCard>
                <CardImg src={img} alt="Avatar" />
              </PortofolioCard>
              <CardHeadLine>Lorem Ipsum.</CardHeadLine>
              <CardDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </CardDescription>
            </PortofolioWrapper>
            <PortofolioWrapper>
              <PortofolioCard>
                <CardImg src={img} alt="Avatar" />
              </PortofolioCard>
              <CardHeadLine>Lorem Ipsum.</CardHeadLine>
              <CardDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </CardDescription>
            </PortofolioWrapper>
          </Carousel>
        </PortofolioSlider>
      </PortofolioContainer>
    </Container>
  );
};

export default Portofolio;
