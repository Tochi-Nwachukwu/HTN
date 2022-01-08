import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function DoubleSection({
  title,
  content,
  buttonText,
  image,
  switchSide,
  showAdditions,
  additionalContent
}) {
  return (
    <div className="mb-8">
      {switchSide == false && (
        <div className="w-full sm:h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-12 px-4 mt-8">
          <div className="w-full flex flex-col items-left justify-center mb-12">
            <h1 className="sm:text-4xl text-2xl sm:my-4 my-2 sm:text-left leading-[64px]">
              {title}
            </h1>
            <p className="text-normal sm:w-3/4 w-full my-4 text-left sm:my-10">
              {content.split("/n")[0]}
            </p>
            <p className="text-normal sm:w-3/4 w-full text-left sm:my-4">
              {content.split("/n")[1]}
            </p>
            <p className="text-normal font-bold sm:w-3/4 w-full text-left sm:my-4">
              {content.split("/n")[2]}
            </p>
            {buttonText && <Button link="/mentorship" text={buttonText} />}

            {showAdditions && (
              <div className="sm:w-3/4 w-full">
                <p className="font-bold sm:text-3xl text-2xl mt-8 mb-8">
                  How does it run?
                </p>
                <p className="text-bold my-4">
                  {additionalContent.split('/n')[0]}
                </p>
                <p className="text-bold my-4">
                {additionalContent.split('/n')[1]}
                </p>
                <p className="font-bold">
                {additionalContent.split('/n')[2]}
                </p>
              </div>
            )}
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-[420px] sm:h-full bg-contain bg-no-repeat bg-right"
          ></div>
        </div>
      )}

      {switchSide == true && (
        <div className="w-full sm:h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-12 px-4 mt-8">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-[420px] sm:h-full bg-contain bg-no-repeat bg-left"
          ></div>
          <div className="w-full flex flex-col items-left justify-center ">
            <h1 className="sm:text-4xl text-2xl sm:my-4 mt-4 mb-2 sm:text-left leading-[64px]">
              {title}
            </h1>
            <p className="text-normal sm:w-3/4 w-full sm:my-6 my-2 text-left ">
              {content}
            </p>

            <Button link="/corporate-trainings" text={buttonText} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DoubleSection;
