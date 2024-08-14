import React from "react";
import { Link } from "react-scroll";
import ThemeBtn from "./ThemeBtn";

function Header() {
  return (
    <div className="relative">
      <header className="w-screen h-[144px] bg-[#6366f1] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#ffffff] font-sans text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-center">
          Book Generator API
        </h1>
      </header>
      <nav className="w-screen sticky top-0 z-50 h-auto sm:h-[74px] bg-[#1E293B] shadow-md flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-0">
        <ul className="text-[0.8rem] sm:text-[0.9rem] text-[#E2E8F0] font-sans flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-6 md:space-x-9 font-medium">
          <li>
            <Link
              to="overview"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              OVERVIEW
            </Link>
          </li>
          <li>
            <Link
              to="authentication"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              AUTHENTICATION
            </Link>
          </li>
          <li>
            <Link
              to="endpoints"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              ENDPOINTS
            </Link>
          </li>
          <li>
            <Link
              to="tutorial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              TUTORIAL
            </Link>
          </li>
          <li>
            <Link
              to="code_examples"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              CODE EXAMPLES
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-[#86c2f7]"
              href=""
            >
              PRICING
            </Link>
          </li>
          <li><ThemeBtn/></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
