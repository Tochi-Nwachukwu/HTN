import React from 'react'

function Card({image, writeup, name, occupation}) {
    return (
        <div className='flex justify-center flex-col items-center sm:px-12 px-4'>
            <div style={{backgroundImage:`url(${image})`}} className="bg-contain bg-no-repeat p-36">

            </div>
            <div className="text-normal text-center my-8">
            {writeup}
            </div>
            <h1 className='font-bold text-blue-400 mb-4'>{name}</h1>
            <p>{occupation}</p>
        </div>
    )
}

export default Card
