import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import section2Image from "../images/corporate-training-2.png";
import section1Image from "../images/corporate-training-1.png";
import headerImage from "../images/corporate-training-hero.png";
import section3Image from "../images/corporate-training-3.png";
import section4Image from "../images/corporate-training-4.png";
import SingleSection from "../components/SingleSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function CorporateTrainings() {
  const pageContent = [
    {
      section: "hero",
      title: "Corporate Trainings",
      content:
        "From leadership development to customer service, we'll help your company's employees be the best they can be. ",
      image: headerImage,
    },

    {
      section: "section-one",
      title: "Let us talk   ",
      content:
        "From leadership development to customer service, we'll help your company's employees be the best they can be. Our trainings are designed to help staff bring out the best in themselves by focusing on their skills, abilities and knowledge. We have so much experience with these types of trainings, that we can even create a custom program for your company.",
      buttonText: "Let us help you",
      image: section1Image,
    },

    {
      section: "addendum",
      title: "We are on a mission",
      content:
        "At HTN, we understand how important people are to a business. We focus on your employees — not just their skills — to help them bring out the best in themselves. Our corporate trainings will teach them how to work as an effective team and give managers an expansive range of tools to build better communities within their companies. These will be some of the most fulfilling and self-rewarding experiences of your own career.",
      buttonText: "Learn about our trainings",
      image: section2Image,
    },
    {
      section: "section-two",
      title: "Health & Wellbeing",
      image: section2Image,
      content:
        "Healthy staff are happy workforce. We know from experience that  hygiene is still a struggle in many  establishments. Our health and well-being training will help get everyone pumped up, energized, and ready to go. ",
      buttonText: "",
    },
    {
      section: "section-three",
      title: "Team work",
      image: section3Image,
      content:
        "Is your team feeling less motivated to work together? Do they lack the desire to seek out new opportunities? Our coaches  can help you produce a more confident, communicative atmosphere. You might be surprised by the results!",
      buttonText: "",
    },
    {
      section: "section-four",
      title: "Responsiblilty",
      image: section4Image,
      content:
        " How do you keep your employees productive? We have the perfect tool to help strengthen their work ethics and get them to be more responsible.",
      buttonText: "",
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

      <h1 className="sm:my-24 my-18 sm:text-4xl leading-[64px] text-center text-2xl">
        Poplar Training Topics
      </h1>

      <DoubleSection
        title={pageContent[3].title}
        content={pageContent[3].content}
        buttonText={pageContent[3].buttonText}
        image={pageContent[3].image}
        switchSide={true}
      />
      <DoubleSection
        title={pageContent[4].title}
        content={pageContent[4].content}
        buttonText={pageContent[4].buttonText}
        image={pageContent[4].image}
        switchSide={true}
      />
      <DoubleSection
        title={pageContent[5].title}
        content={pageContent[5].content}
        buttonText={pageContent[5].buttonText}
        image={pageContent[5].image}
        switchSide={true}
      />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default CorporateTrainings;
