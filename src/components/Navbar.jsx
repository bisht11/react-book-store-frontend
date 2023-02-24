import { Link } from "react-scroll";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => {
    setnav(!nav);
  };
  const handleClose = () => {
    setnav(!nav);
  };
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center  ">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BOOKSZILLA</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Help
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {/*  hamburger menu controller*/}
          {!nav ? (
            <AiOutlineMenu className="w-10 cursor-pointer" />
          ) : (
            <RxCross2 className="w-10 cursor-pointer" />
          )}
        </div>
      </div>

      {/* dropdown menu / hamburger menu */}
      <div>
        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="support"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Help
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="platforms"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Platforms
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="pricing"
              smooth={true}
              offset={50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
