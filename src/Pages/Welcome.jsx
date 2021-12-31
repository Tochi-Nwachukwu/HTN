import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/home-page-overlay.png'
import DoubleSection from '../components/DoubleSection'
import uche from '../images/uche_cut-out.png'
import section2Image from '../images/1.png'
import section3Image from '../images/2.png'
import SingleSection from '../components/SingleSection'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'

function Welcome() {

    const pageContent = [{
        section: 'hero', title: "Reach for the Sky", content: "An amazing life starts with self love. Discover  how to revitalize your life with positive actions and self care. ", image: headerImage
    },

    { section: 'section-one', title: "Limitless Possibilities", content: "We are devoted to raiseing and taining people to become the best they can be. Creating a netwrok of high impact individuals who are as limitless as the sky and as unstoppable as the sea", buttonText: "Let us help you", image: uche },

    {
        section: 'section-two', title: "You too can win", content: "We are creating a best people relations with everyone.This is lobecase our ceservices and trainings make people realise how awe some they are, indeth trainns", buttonText: "Learn about our trainings", image: section2Image
    },
    {
        section: 'section-two', title: "How can we help you?", image: section3Image
    }



    ]
    return (
        <div>


            <HeroSection title={pageContent[0].title} content={pageContent[0].content} image={pageContent[0].image} />

            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={false} />
            <DoubleSection title={pageContent[2].title} content={pageContent[2].content} buttonText={pageContent[2].buttonText} image={pageContent[2].image} switchSide={true} />

            <SingleSection title={pageContent[3].title} image={pageContent[3].image} />

            <ServiceSection />

            <Footer />
        </div>
    )
}

export default Welcome
