import { DropdownIcon, KudaLogo, ProfileIcon } from "./Icons";

const HeaderSection = () => (
  <div className="w-full p-5 shadow flex items-center h-[58px] min-w-[992px]:h-[70px] z-[999] justify-center fixed top-0 left-0 bg-white">
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
          <li className="flex items-baseline justify-start gap-2">
            <p className="font-bold text-base leading-6 text-[#40196d]">
              {" "}
              Company
            </p>{" "}
            <DropdownIcon />
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
        <ProfileIcon />
        <button className="flex flex-col h-5 items-center justify-center w-6 gap-2 ">
          <span className="block w-5 h-0.5 bg-[#40196d] rounded"></span>
          <span className="block w-5 h-0.5 bg-[#40196d] rounded"></span>
        </button>
      </div>
    </div>
  </div>
);

export default HeaderSection;
