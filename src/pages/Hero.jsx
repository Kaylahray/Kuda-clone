import {
  AndroidIcon,
  //   DropdownIcon,
  IosIcon,
  //   KudaLogo,
  //   ProfileIcon,
} from "../components/Icons";
import { gif, cbn, ndic } from "../assets";
const HeroSection = () => (
  <div className="w-full flex items-center justify-center mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 items-center">
      <div className="w-full">
        <h1 className="text-5xl font-black text-[#40196d] mb-5">
          The money app for Africans.
        </h1>
        <p className="mb-5 text-xl leading-6 font-semibold text-black">
          Make free transfers, enjoy cashless payment options and earn
          interest on your savings with Kuda.
        </p>
        <div className="flex items-center justify-start gap-2">
          <a href="#">
            <IosIcon />
          </a>
          <a href="#">
            <AndroidIcon />
          </a>
        </div>
        <div className="flex items-center justify-start gap-4 lg:gap-2 mt-2">
          <div className="flex items-baseline justify-start gap-1">
            <p className="text-[#979797] text-xs text-nowrap">
              Fully licensed by the CBN
            </p>
            <img src={cbn} alt="cbn" width={10} height={10} />
          </div>
          <div className="flex items-baseline justify-start gap-1">
            <p className="text-[#979797] text-xs text-nowrap">
              Deposits insured by
            </p>
            <img src={ndic} alt="ndic" width={20} height={20} />
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
