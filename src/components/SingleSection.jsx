import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
function SingleSection({ title, image, button, buttonText }) {
  return (
    <div className="w-full sm:p-12 p-4">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-screen bg-cover bg-center  flex items-center justify-center flex flex-col text-center  "
        >
          <h1 className="sm:text-7xl text-2xl  text-white drop-shadow mb-12 mt-12">
            {title}
          </h1>
          {button == true && (
            <Button link="/mentorship" text={buttonText} />
          )}
        </div>
    </div>
  );
}

export default SingleSection;
