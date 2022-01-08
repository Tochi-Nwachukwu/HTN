import React, { useState } from "react";
import Logo from "../images/htn_logo.png";
import hamburger from "../images/hamburger.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="w-full bg-[#271B63bb] py-4 flex sm:justify-around justify-between text-white ">
        <div
          style={{ backgroundImage: `url(${Logo})` }}
          className="ml-4 sm:ml-0 w-[82px] h-[31px]"
        ></div>
        <ul className="hidden sm:flex items-center w-3/4  justify-around mx-8">
          <NavLink
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/"
          >
            START HERE
          </NavLink>
          <NavLink
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/our-story"
          >
            OUR STORY
          </NavLink>
          <NavLink
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/mentorship"
          >
            MENTORSHIP
          </NavLink>
          <NavLink
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/corporate-trainings"
          >
            TRAININGS
          </NavLink>
          
        </ul>

        <div
          onClick={openNav}
          style={{ backgroundImage: `url(${hamburger})` }}
          className="mr-4 w-[24px] h-[24px] sm:hidden flex"
        ></div>
      </div>
      {open && (
        <ul className="sm:hidden flex flex-col justify-center items-center w-full  text-white py-8 bg-[#271B63bb] backdrop-blur">
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/"
            className="my-4"
          >
            START HERE
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/our-story"
            className="my-4"
          >
            OUR STORY
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/mentorship"
            className="my-4"
          >
            MENTORSHIP
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            exact
            activeClassName="text-[#FFD945] font-bold text-xl"
            to="/corporate-trainings"
            className="my-4"
          >
            TRAININGS
          </NavLink>
          
        </ul>
      )}
    </div>
  );
}

export default NavBar;
