import React from 'react'



function HeroSection({ title, content, image }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col  items-center justify-center'>
            <h1 className="sm:w-3/4 text-center sm:mb-8 w-full sm:text-7xl leading-[86px] text-4xl text-white sm:px-8 px-4">{title}</h1>
            <p className="sm:w-1/2 w-full text-white p-4  text-center my-12 sm:text-3xl text-xl">{content}</p>
        </div>
    )
}

export default HeroSection
