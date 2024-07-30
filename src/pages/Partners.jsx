import { valar, entree, sbi, targetglobal, visa } from "../assets";

const Partners = () => {
  return (
    <div className="bg-[#FBFBFB] flex px-[130px] pt-[114.99px] pb-[77px] flex-col items-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="text-center text-[#40196D] text-2xl font-black leading-[49.68px]">
          Our Partners
        </h3>

        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            <li>
              <img src={valar} alt="one" />
            </li>

            <li>
              <img src={entree} alt="two" />
            </li>

            <li>
              <img src={sbi} alt="three" />
            </li>

            <li>
              <img src={targetglobal} alt="four" />
            </li>

            <li>
              <img src={visa} alt="five" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
