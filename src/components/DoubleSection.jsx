import React from 'react'

function DoubleSection({ title, content, buttonText, image, switchSide }) {
    return (
        <div>
            {switchSide == false &&
                <div className='w-full sm:h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-12 pl-4'>
                    <div className="w-full flex flex-col items-left justify-center mb-12">
                        <h1 className='text-5xl my-4 text-left'>{title}</h1>
                        <p className='text-normal sm:w-3/4 w-full my-4 text-left '>{content}</p>
                        <button className='text-black bg-[#FFD945] w-fit p-4 '>{buttonText}</button>

                    </div>
                    <div style={{ backgroundImage: `url(${image})` }} className="w-full h-[420px] sm:h-full bg-contain bg-no-repeat bg-right"></div>
                </div>}

            {switchSide == true &&
                <div className='w-full sm:h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-12 px-4'>
                    <div style={{ backgroundImage: `url(${image})` }} className="w-full bg-contain bg-no-repeat bg-left"></div>
                    <div className="w-full flex flex-col items-left justify-center ">
                        <h1 className='text-5xl my-4 text-left'>{title}</h1>
                        <p className='text-normal sm:w-3/4 w-full my-4 text-left '>{content}</p>
                        <button className='text-black bg-[#FFD945] w-fit p-4 mb-12'>{buttonText}</button>

                    </div>



                </div>}
        </div>
    )
}

export default DoubleSection
