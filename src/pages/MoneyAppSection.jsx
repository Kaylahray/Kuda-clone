import appleStore from "../assets/apple-store.svg";
import googlePlayStore from "../assets/google-play-store.svg";
import kudaMobileApp from "../assets/kuda-mobile-app.svg";

const MoneyAppSection = () => {
  return (
    <div>
      {/* THE MONEY APP FOR AFRICANS SECTION - MOBILE */}
      <section className="md:hidden">
        <div className="mb-10 bg-[#eff1fe] rounded-lg px-5 py-12 max-w-[90%] sm:max-w-[480px] mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <h2 className="text-[#40196D] leading-[38px] font-[900] text-[27px] mb-2 mx-auto text-center">
              The money app for Africans.
            </h2>
            <p className="text-[14px] max-w-[350px] text-[#000] text-center">
              Save, spend, send and invest money across borders.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <img src={appleStore} alt="Apple Store" />
            <img src={googlePlayStore} alt="Google Play Store" />
          </div>
        </div>
      </section>

      {/* THE MONEY APP FOR AFRICANS SECTION - TABLET */}
      <section className="hidden md:flex lg:hidden max-md:hidden">
        <div className="mb-32 bg-[#eff1fe] rounded-lg px-5 py-16 max-w-[90%] mx-auto flex flex-col items-center gap-9 shadow-sm">
          <div className="flex flex-col justify-center">
            <h2 className="text-[#40196D] leading-[42px] font-[900] text-[30px] mb-[10px] mx-auto text-center w-[300px]">
              The money app for Africans.
            </h2>
            <p className="text-[14px] text-[#000] text-center">
              Save, spend, send and invest money across borders.
            </p>
          </div>
          <button className="bg-[#40196D] rounded-lg py-[10px] px-11 text-white text-[13px] font-bold">
            Join Kuda
          </button>
        </div>
      </section>

      {/* THE MONEY APP FOR AFRICANS SECTION - LAPTOP */}
      <section className="hidden lg:flex">
        <div className="mb-32 bg-[#eff1fe] rounded-lg pl-[70px] pt-[70px] pr-[250px] max-w-[70%] h-[340px] mx-auto flex justify-between gap-9 shadow-sm relative overflow-hidden">
          {/* Left container */}
          <div className="flex flex-col gap-7">
            <h2 className="text-[#40196D] leading-[42px] font-[900] text-[32px] w-[300px]">
              The money app for Africans.
            </h2>
            <p className="text-[14px] text-[#000] mt-[-15px]">
              Save, spend, send and invest money across borders.
            </p>
            <button className="bg-[#40196D] rounded-lg py-[10px] w-[150px] text-white text-[13px] font-bold">
              Join Kuda
            </button>
          </div>
          {/* Right container */}
          <div className="w-[160px] h-[auto] overflow-hidden">
            <img
              src={kudaMobileApp}
              alt="kuda mobile app"
              className="absolute top-[60px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoneyAppSection;
