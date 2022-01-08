import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import section2Image from "../images/story-2.png";
import section1Image from "../images/private-coaching-1.png";
import headerImage from "../images/private-coaching.png";
import section3Image from "../images/story-3.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function PrivateCoaching() {
  const pageContent = [
    {
      section: "hero",
      title: "Private Coaching",
      content:
        "Looking to improve your career and boost your personality, you've come to the right place.",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Let us talk   ",
      content:
        "Looking to improve your career and boost your personality, you've come to the right place. We will work with you to develop yourself professionally and personally, and set up a plan of success. We are available both in-person and online, depending on your location. Based around career development/personality development, this service gives feedback  to provide people with an understanding of their strengths/weaknesses in comparison to others in the job market.",
      buttonText: "Let us help you",
      image: section1Image,
    },

    {
      section: "section-two",
      title: "We are on a mission",
      content:
        "Personal coaching packages provide 1:1 mentoring and usually range from 4 weeks to 16 weeks of weekly time. During your time together, you will develop your strengths and break down any weaknesses, as well as work with me on developing your career./n    To sign up kindly fill the form below./n Please provide your correct contact details. once this is done, you would be contacted by our lead coach to discuss further steps.",
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

export default PrivateCoaching;
