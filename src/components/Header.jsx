/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  DropdownIcon,
  KudaLogo,
  ProfileIcon,
  RightCaretIcon,
} from "./Icons";

const HeaderSection = ({ isCookiesVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full p-5 shadow flex items-center  h-[58px] min-w-[992px]:h-[70px] z-[999] justify-center fixed ${
          isCookiesVisible ? "top-12 left-0 md:top-0" : "top-0 left-0"
        }  bg-white`}
      >
        <div className="w-full hidden sm:hidden md:hidden min-[992px]:flex items-center justify-between">
          <div className="flex items-center justify-start gap-14">
            <a href="/" className="no-underline min-w-[100px]">
              <KudaLogo />
            </a>
            <ul className="flex items-center justify-start gap-8">
              <li className="flex items-baseline justify-start gap-2">
                <p className="font-bold text-base leading-6 text-[#40196d]">
                  {" "}
                  Personal
                </p>{" "}
                <DropdownIcon />
              </li>
              <li className="flex items-baseline justify-start gap-2">
                <p className="font-bold text-base leading-6 text-[#40196d]">
                  {" "}
                  Business
                </p>
                <DropdownIcon />
              </li>
              <li className="flex items-baseline justify-start gap-2 dropdown relative cursor-pointer">
                <p className="font-bold text-base leading-6 text-[#40196d]">
                  {" "}
                  Company
                </p>{" "}
                <DropdownIcon />
                <div className="dropdown-content absolute mt-2 w-[460px] h-[605px] bg-white border border-gray-300 rounded-lg shadow-lg p-5 left-0 top-8">
                  <p>Blog</p>
                  <p>Press</p>
                  <p>Join Our Team</p>
                  <p>About Us</p>
                </div>
              </li>
              <li className="flex items-baseline justify-start gap-2">
                <p className="font-bold text-base leading-6 text-[#40196d]">
                  {" "}
                  Help
                </p>{" "}
                <DropdownIcon />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-start gap-10">
            <button>
              <p className="font-bold text-base leading-6 text-[#40196d]">
                Sign in
              </p>
            </button>
            <button className="bg-[#40196d] rounded py-2 px-4">
              <p className="font-bold text-base leading-6 text-white">
                Join Kuda
              </p>
            </button>
            <button>
              <ProfileIcon />
            </button>
          </div>
        </div>

        <div className="w-full flex sm:flex md:flex min-[992px]:hidden items-center justify-between ">
          <a href="/" className="no-underline">
            <KudaLogo />
          </a>
          <div className="flex items-center justify-start">
            {!open && <ProfileIcon />}
            <button
              onClick={() => setOpen(true)}
              className={` relative ${
                open ? "hidden" : "block"
              } flex flex-col h-5 items-center justify-center w-6 gap-2 `}
            >
              <span className="block w-5 h-0.5 bg-[#40196d] rounded"></span>
              <span className="block w-5 h-0.5 bg-[#40196d] rounded"></span>
            </button>
            <button
              onClick={() => setOpen(false)}
              className={` relative ${
                open ? "block" : "hidden"
              } flex flex-col h-5 items-center justify-center w-6 gap-2 `}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-screen fixed top-[50px] bg-white flex flex-col items-start justify-start gap-14 px-8 py-8 ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="flex items-center justify-start gap-4">
          <button className="bg-[#40196d] rounded py-2 px-4">
            <p className="font-bold text-base leading-6 text-white">
              Join Kuda
            </p>
          </button>

          <button className="bg-[#dfe3ff] rounded py-2 px-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Sign in
            </p>
          </button>
        </div>

        <ul className="flex flex-col items-start justify-start gap-8 w-full">
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Personal
            </p>
            <RightCaretIcon />
          </li>
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Business
            </p>
            <RightCaretIcon />
          </li>
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Company
            </p>
            <RightCaretIcon />
          </li>
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Developers
            </p>
          </li>
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Contact Us
            </p>
          </li>
          <li className="flex items-baseline justify-between gap-2 w-full border-b-[1px] border-b-[#dcdce080] pb-4">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              Help
            </p>
            <RightCaretIcon />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSection;
