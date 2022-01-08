import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import section2Image from "../images/story-2.png";
import MentorshipHug from "../images/mentorship-1.png";
import section1Image from "../images/mentorship-2.png";
import headerImage from "../images/mentorship-header.png";
import section3Image from "../images/story-3.png";
import card1Image from "../images/card-1.png";
import card2Image from "../images/card-2.png";
import card3Image from "../images/card-3.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Mentorship() {
  const pageContent = [
    {
      section: "hero",
      title: "A better verison of you",
      content:
        "You always wanted to be a better version of you! We can help you achieve that.",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Mentorship",
      content:
        "Our mentorship package is all about helping people. Whether you're struggling with mental health, or a chemical dependency, financial issues that you're dealing with, or a legal problem, our trained professionals are there to help you through it. Know that our motives are pure and we want nothing more than to see people succeed.",
      buttonText: "Become a mentee",
      image: section1Image,
    },

    {
      section: "section-two",
      title: "We are on a mission",
      content:
        "We are devoted to raiseing and taining people to become the best they can be. Creating a netwrok of high impact individuals who are as limitless as the sky and as unstoppable as the sea",
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

  const cardContent = [
    {
      image: card1Image,
      paragraph:
        "We are devoted to raiseing and training people to become the best they can be.",
      name: "Tonye",
      occupation: "Music Artiste",
    },
    {
      image: card2Image,
      paragraph:
        "We are devoted to raiseing and training people to become the best they can be.",
      name: "Tonye",
      occupation: "Music Artiste",
    },
    {
      image: card3Image,
      paragraph:
        "We are devoted to raiseing and training people to become the best they can be.",
      name: "Tonye",
      occupation: "Music Artiste",
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

      <h1 className="w-full px-6 py-6 leading-[68px] text-3xl  text-left sm:text-center mt-12 mb-12">
        Choose your mentorship plan
      </h1>
      <ServiceSection mentorship={true} />
      <div className="w-full flex flex-col items-center justify-center sm:py-20 py-8">
        <div
          style={{ backgroundImage: `url(${MentorshipHug})` }}
          className=" bg-contain bg-no-repeat p-40 sm:px-96 sm:py-96"
        ></div>
        <p className="mt-8 text-2xl sm:text-4xl px-4 text-center">
          We help you become the best version of yourself
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="sm:text-3xl text-2xl text-center mt-16 mb-8 leading-[72px]">Hear from our Mentees</h1>
        <div className="grid grid-col-1 sm:mb-16 mb-16 sm:grid-cols-3 gap-5 sm:w-3/4 w-full px-4 ">
        {cardContent.map((element) => (
          <Card
            image={element.image}
            writeup={element.paragraph}
            name={element.name}
            occupation={element.occupation}
          />
        ))}
      </div>
      </div>
      

      <Footer />
    </div>
  );
}

export default Mentorship;
