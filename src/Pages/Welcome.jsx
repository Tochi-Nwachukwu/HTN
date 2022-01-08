import React from "react";
import HeroSection from "../components/HeroSection";
import headerImage from "../images/home-page-overlay.png";
import DoubleSection from "../components/DoubleSection";
import uche from "../images/uche_cut-out.png";
import section2Image from "../images/1.png";
import section3Image from "../images/2.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

function Welcome() {
  const pageContent = [
    {
      section: "hero",
      title: "Reach for the Sky",
      content:
        "Through our help, you'll find simple positive actions and self-care strategies to start enjoying life a whole lot more. Take some time to learn how you can revitalize your life through positivity and love.  ",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Limitless Possibilities",
      content:
        "We are devoted to raising and training people to become the best they can be. Creating a network of high impact individuals who are as limitless as the sky and as unstoppable as the sea. The infinite potential will manifest itself in many different ways: business ideas, products, money making structures and so on.  Come join us!",
      buttonText: "Let us help you",
      image: uche,
    },

    {
      section: "section-two",
      title: "You too can win",
      content:
        "We are creating the best people relations with everyone. This is because our services empower people to become more powerful, confident, and independent and our trainings make them realize how awesome they are.",
      image: section2Image,
      buttonText: "Learn about our trainings",
    },
    {
      section: "section-two",
      title: "How can we help you?",
      image: section3Image,
    },
  ];
  return (
    <div>
      <HeroSection
        title={pageContent[0].title}
        content={pageContent[0].content}
        image={pageContent[0].image}
      />

      <DoubleSection
        title={pageContent[1].title}
        content={pageContent[1].content}
        buttonText={pageContent[1].buttonText}
        image={pageContent[1].image}
        switchSide={false}
      />
      <DoubleSection
        title={pageContent[2].title}
        content={pageContent[2].content}
        buttonText={pageContent[2].buttonText}
        image={pageContent[2].image}
        switchSide={true}
      />

      <SingleSection
        title={pageContent[3].title}
        image={pageContent[3].image}
      />

      <ServiceSection />

      <Footer />
    </div>
  );
}

export default Welcome;
