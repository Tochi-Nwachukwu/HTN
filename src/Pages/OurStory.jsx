import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import section2Image from "../images/story-2.png";
import section1Image from "../images/story-1.png";
import headerImage from "../images/story-header.png";
import section3Image from "../images/story-3.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

function OurStory() {
  const pageContent = [
    {
      section: "hero",
      title: "You are unstoppable",
      content:
        "Sometimes the smallest things make all the difference. We provide a wealth of information on how to remove stress and revitalize your life with positive actions and self care.",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Our Story",
      content:
        "It all started with a desire to give back and develop the human capacity within the country. From this, we grew into a full-fledged consultancy delivering services to individuals and businesses all over the country. /n Our core essence is to provide professional training for individual and group levels. We create a powerful learning environment that allows our trainers to work closely with your organization to develop the skills of staff and management. Our aim is to help you produce amazing results, your own way. And we can facilitate and guide you along the way.",
      buttonText: "Let us help you",
      image: section1Image,
    },

    {
      section: "section-two",
      title: "We have a clear vision",
      content:
        "Our vision is to groom people who can do more of the things that makes them useful, fulfilled, purposeful and live a higher life irrespective of their gender or status./n We believe in the potential of women and children from any strata of the society and we wish to provide them an equal opportunity in doing what they love with a touch of excellence.",
      buttonText: "Learn about our trainings",
      image: section2Image,
    },
    {
      section: "section-three",
      title: "You are already awesome",
      image: section3Image,
      buttonText: "Let’s help you get even better",
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
        button={true}
        buttonText={pageContent[3].buttonText}
      />

      <Footer />
    </div>
  );
}

export default OurStory;
