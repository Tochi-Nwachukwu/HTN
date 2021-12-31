import React from 'react'

function SingleSection({ title, image, button, buttonText }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='w-full h-screen bg-cover bg-center  flex items-center justify-center flex flex-col text-center  '>
            <h1 className='sm:text-7xl text-5xl  text-white drop-shadow mb-12 mt-12'>{title}</h1>

            {button == true && <button className='text-black bg-[#FFD945] w-fit p-4'>{buttonText}</button>}
        </div>
    )
}

export default SingleSection
