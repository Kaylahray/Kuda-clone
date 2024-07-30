import { kudaFavicon, fiveStars } from "../assets";

const FixedFooter = () => {
  return (
    <div className="fixed bottom-0 w-[100%] h-[90px] bg-[#eff1fe] flex justify-between items-center px-5 md:hidden">
      {/* left side */}
      <div className="flex gap-4 items-center">
        <div className="w-[50px] h-[auto] rounded-lg">
          <img
            src={kudaFavicon}
            alt="Kuda Favicon"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#40196D] font-extrabold text-[17px]">
            Kuda.
          </p>
          <img
            src={fiveStars}
            alt="5 Stars"
            className="w-[80px] mt-[-2px]"
          />
        </div>
      </div>

      {/* right side */}
      <button className="bg-[#40196D] rounded-xl h-[40px] px-[18px] text-white text-[12px] font-extrabold">
        Get the App
      </button>
    </div>
  );
};

export default FixedFooter;
