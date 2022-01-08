import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function ServiceSection({ mentorship }) {
  return (
    <div className="sm:p-12 p-4 ">
      <div className="w-full h-full sm:h-screen grid sm:grid-cols-2 grid-cols-1">
        <div className="w-full cursor-pointer flex flex-col items-left justify-center bg-[#7477FF] hover:bg-[#6466DA] py-16">
          <div className="sm:pl-12 pl-4 pr-2">
            <p className="text-5xl my-4 text-left font-bold text-white">
              {!mentorship ? "Corporate trainings" : "Private mentorship"}
            </p>
            {!mentorship ? (
              <p className="text-normal w-full sm:w-3/4 my-4 text-left text-white ">
                Do you run a school, company, or business and you need your
                staff motivated, updated, and informed? This is the right
                service for you.
              </p>
            ) : (
              <p className="text-normal w-full sm:w-3/4 my-4 text-left text-white ">
                Our private mentorship packages involve closed-room sessions
                with one of our seasoned life coaches. This is designed to help
                you/ your ward out of habit-related situations which you are not
                comfortable sharing with anyone else.
              </p>
            )}
            <Button
              link={
                !mentorship ? "/corporate-trainings" : "/private-mentorship"
              }
              text="Book Now"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-left justify-center py-16 bg-[#FDF8E5]">
          <div className="sm:pl-12 pl-4 pr-2">
            <p className="text-5xl my-4 text-left text-[#7477FF] font-bold">
              {!mentorship ? "Private Mentorship" : "Personal Coaching"}
            </p>
            {!mentorship ? (
              <p className="text-normal w-full sm:w-3/4 my-4 text-left ">
                Do you have a child that needs some extra help building up their
                self-esteem? Or do you need some extra help yourself and
                figuring out what life is all about? This service would be great
                for you.
              </p>
            ) : (
              <p className="text-normal w-full sm:w-3/4 my-4 text-left ">
                Are you stuck trying to figure out what you want to do with your
                life? Do you feel like nobody is willing to give you the time of
                day? We can help! Our personalized packages are more long-term,
                and they focus mainly on personality development.
              </p>
            )}

            <Button
              link={!mentorship ? "/private-mentorship" : "/private-coaching"}
              text="learn more "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
