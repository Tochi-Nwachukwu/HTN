import React from 'react'
import { Link } from 'react-router-dom'


function Button({link, text}) {
    return (
        <div>
            <Link className="mt-4" to={link}>
              <button className="text-black bg-[#FFD945] w-fit p-4 mb-12 hover:px-8">
                {text}
              </button>
            </Link>
        </div>
    )
}

export default Button
