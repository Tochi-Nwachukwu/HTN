import React from "react";
import Logo from "../images/htn_logo.png";

function Footer() {
  return (
    <div className="w-full sm:p-12 p-4 bg-[#271B63] text-white mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <p className="font-bold text-2xl">SITE MAP</p>

          <div className="flex py-8">
            <ul>
              <li className="my-4 mr-4">HOME</li>
              <li className="my-4 mr-4">OUR STORY</li>
              <li className="my-4 mr-4">COACHING</li>
              <li className="my-4 mr-4">SPEAKING</li>
              <li className="my-4 mr-4">LET’S TALK</li>
            </ul>
            <ul>
              <li className="my-4 ml-8">CORPORATE TRAININGS</li>
              <li className="my-4 ml-8">PRIVATE MENTORSHIP</li>
              <li className="my-4 ml-8">PERSONAL COACHING</li>
            </ul>
          </div>
        </div>
        <div className="sm:pl-12">
          <p className="font-bold text-2xl">CONTACT</p>
          <p className="sm:py-8 py-2">
            First floor room 17 Pacific complex Awka road by onitsha shopping
            mall
          </p>

          <div
            style={{ backgroundImage: `url(${Logo})` }}
            className="w-[82px] h-[31px]"
          ></div>
        </div>
      </div>
      <div>
        <p className="mt-4 py-4 sm:text-center text-left text-sm sm:text-normal">
          Copyright 2021 Higher Touch Network
        </p>
      </div>
    </div>
  );
}

export default Footer;
