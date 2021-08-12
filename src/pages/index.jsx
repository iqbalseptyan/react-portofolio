import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Portofolio from "../components/Portofolio/Portofolio";
import Particles from "react-particles-js";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const particleStyle = {
    position: "absolute",
    zIndex: "1",
    width: "100vh",
    height: "100vh",
    maxHeight: "700px",
  };
  return (
    <Router>
      <Navbar />
      <Particles
        style={particleStyle}
        params={{
          interactivity: {
            detectsOn: "window",
          },
          particles: {
            color: {
              value: "#f00",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 50,
                  sync: false,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            links: {
              blink: false,
              color: {
                value: "random",
              },
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      />
      <Hero />
      <About />
      <Portofolio />
      <Info />
      <Contact />
      <Footer />
    </Router>
  );
};

export default Home;
