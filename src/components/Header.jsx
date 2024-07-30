import { DropdownIcon, KudaLogo, ProfileIcon } from "./Icons";

const HeaderSection = () => (
  <div className="w-full p-4 shadow flex items-center z-[800] justify-center fixed top-0 left-0 bg-white">
    <div className="w-4/5">
      <div className="hidden sm:hidden md:hidden lg:flex items-center justify-between ">
        <div className="flex items-center justify-start gap-14">
          <a
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
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

      <div className="flex sm:flex md:flex lg:hidden items-center justify-between ">
        <a
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <KudaLogo />
        </a>
        <div className="flex items-center justify-start gap-1">
          <ProfileIcon />
          <button>
            <p className="text-2xl font-black text-[#40196d]">=</p>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderSection;
