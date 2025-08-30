import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaPhone } from "react-icons/fa6";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Bus" },
    { href: "/services", label: "Services" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between lg:px-28 md:px-16 sm:px-7 px-4 sticky top-0 z-50">
      {/* Logo section */}
      <Link to={"/"} className="mr-auto">
        <img src={Logo} alt="logo" className="w-28 h-auto object-contain" />
      </Link>

      {/* Right section with phone and theme toggle */}
      <div className="flex items-center gap-x-4">
        <div className="relative hidden lg:flex bg-violet-600 rounded-md px-8 py-2 w-fit cursor-pointer">
          <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-violet-600 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
            <FaPhone className="text-neutral-50 text-sm" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-neutral-200 font-light">Need Help?</p>
            <p className="text-xs font-normal text-neutral-50 tracking-wide">
              +91 1234567890
            </p>
          </div>
        </div>
        {/* Theme */}
        <Theme />
      </div>
      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 z-50 relative lg:block ml-[10px]"
        style={{ zIndex: 50 }} // Ensuring it stays on top
      >
        {open ? (
          <LiaTimesSolid className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* Navigation links behind the button */}
      {open && (
        <div className="absolute top-14 right-4 bg-neutral-100 dark:bg-neutral-800 shadow-md rounded-md p-4 z-40">
          <ul className="list-none flex flex-col gap-y-2 text-base text-neutral-600 dark:text-neutral-300 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  onClick={handleClose}
                  className="hover:text-violet-600 ease-in-out duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
