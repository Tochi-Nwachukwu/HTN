import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import section2Image from "../images/story-2.png";
import section1Image from "../images/private-mentorship-1.png";
import headerImage from "../images/mentorship-hero.png";
import section3Image from "../images/story-3.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function PrivateMentorship() {
  const pageContent = [
    {
      section: "hero",
      title: "Private Mentorship",
      content:
        "Life is sometimes hard. But it can be a whole lot easier with some guidance ",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Let us talk   ",
      content:
        "Life is sometimes hard. But it can be a whole lot easier with some guidance – and that's what our coaching packages are all about. These packages focus on career development, but they also help you discover more about yourself and how to use your natural talents and skills to achieve personal growth and happiness.",
      buttonText: "Let us help you",
      image: section1Image,
    },

    {
      section: "section-two",
      title: "We are on a mission",
      content:
        "Our private mentorship packages run for 3 months, during this period of time, you would have 12 contacts with our lead coaches, during with they would discuss your issues under closed doors, and help you figure your way out of the mess./n To sign up kindly fill the form below. /n  Please provide your correct contact details. once this is done, you would be contacted by our lead coach to discuss further steps.",
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
        image={pageContent[1].image}
        switchSide={false}
        showAdditions={true}
        additionalContent={pageContent[2].content}
      />

      <h1 className="my-16 sm:text-3xl text-center text-2xl">Sign up here</h1>
      <ContactForm />

      <Footer />
    </div>
  );
}

export default PrivateMentorship;
