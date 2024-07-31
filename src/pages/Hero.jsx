import {
  AndroidIcon,
  //   DropdownIcon,
  IosIcon,
  //   KudaLogo,
  //   ProfileIcon,
} from "../components/Icons";
import { gif, cbn, ndic } from "../assets";
const HeroSection = () => (
  <div className="w-full flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-custom lg:grid-cols-custom w-full items-center">
      <div className="w-full  mx-auto flex-col max-[767px]:text-center max-[767px]:flex max-[767px]:items-center max-[767px]:justify-center">
        <h1 className=" min-[500px]:max-w-[70%] md:max-w-[100%] text-[32px] md:text-[2.7rem] line-height-custom font-muli font-black text-[#40196d] mb-5">
          The money app for Africans.
        </h1>
        <p className=" min-[500px]:max-w-[70%] md:max-w-[100%] mb-6 text-[17.5px] md:text-[17px] leading-6 font-semibold text-black">
          Make free transfers, enjoy cashless payment options and earn
          interest on your savings with Kuda.
        </p>
        <div className="flex items-center justify-start gap-2 mb-5">
          <a href="#">
            <IosIcon />
          </a>
          <a href="#">
            <AndroidIcon />
          </a>
        </div>
        <div className="w-full flex items-center  justify-center md:justify-start gap-4 lg:gap-2 mt-2">
          <div className="flex items-baseline justify-start gap-1">
            <p className="text-[#979797] text-xs text-nowrap">
              Fully licensed by the CBN
            </p>
            <img src={cbn} alt="cbn" width={10} height={10} />
          </div>
          <div className="flex justify-start gap-1">
            <p className="text-[#979797] text-xs text-nowrap">
              Deposits insured by
            </p>
            <img src={ndic} alt="ndic" width={50} height={16} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src={gif}
          alt="animation"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
