import React from 'react'
import HeroSection from '../components/HeroSection'
import DoubleSection from '../components/DoubleSection'
import section2Image from '../images/story-2.png'
import section1Image from '../images/story-1.png'
import headerImage from '../images/story-header.png'
import section3Image from '../images/story-3.png'
import SingleSection from '../components/SingleSection'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'

function OurStory() {
    const pageContent = [{
        section: 'hero', title: "You are unstoppable", content: "An amazing life starts with self love. Discover  how to revitalize your life with positive actions and self care.  ", image: headerImage
    },

    { section: 'section-one', title: "Our Story", content: "We are devoted to raiseing and taining people to become the best they can be. Creating a netwrok of high impact individuals who are as limitless as the sky and as unstoppable as the sea", buttonText: "Let us help you", image: section1Image },

    {
        section: 'section-two', title: "We are on a mission", content: "We are devoted to raiseing and taining people to become the best they can be. Creating a netwrok of high impact individuals who are as limitless as the sky and as unstoppable as the sea", buttonText: "Learn about our trainings", image: section2Image
    },
    {
        section: 'section-three', title: "You are already awesome", image: section3Image, buttonText: "Let’s help you get even better"
    }



    ]
    return (
        <div>


            <HeroSection title={pageContent[0].title} content={pageContent[0].content} image={pageContent[0].image} />

            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={false} />
            <DoubleSection title={pageContent[2].title} content={pageContent[2].content} buttonText={pageContent[2].buttonText} image={pageContent[2].image} switchSide={true} />

            <SingleSection title={pageContent[3].title} image={pageContent[3].image} button={true} buttonText={pageContent[3].buttonText} />

            <Footer />
        </div>
    )
}

export default OurStory
