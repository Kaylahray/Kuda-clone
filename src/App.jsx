import Partners from "./pages/Partners";
import Sponsor from "./pages/Sponsor";
import "./App.css";
import PricingTable from "./pages/PricingTable";
import Cards from "./pages/Cards";
import { useState } from "react";
import HeaderSection from "./components/Header";
import HeroSection from "./pages/Hero";
import Section from "./pages/Section";
import Testimonial from "./pages/Testimonial";
import More from "./pages/More";
import MoneyAppSection from "./pages/MoneyAppSection";
import Footer from "./pages/Footer";
import FixedFooter from "./components/FixedFooter";

const App = () => {
  const [isCookiesVisible, setIsCookiesVisible] = useState(true);

  const handleCookiesVisibility = () => {
    setIsCookiesVisible(false);
  };
  return (
    <>
      <header>
        <div className="relative">
          {/* TOP BAR COOKIES POP UP BOX */}
          {isCookiesVisible ? (
            <div className="z-50 flex gap-4 items-center justify-between py-2 pl-5 pr-5 md:hidden fixed top-0 w-full bg-white">
              <p className="text-[14px]">
                By using this website you agree to our{" "}
                <span className="underline text-[#40196D]">
                  cookie policy.
                </span>
              </p>

              <button
                className="bg-[#dfe3ff] text-[#40196D] font-bold text-[13px] rounded-lg px-3 py-2"
                onClick={handleCookiesVisibility}
              >
                Dismiss
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <HeaderSection isCookiesVisible={isCookiesVisible} />
      </header>

      <main>
        <div
          className={`bg-white flex flex-col mx-auto max-w-[1180px] px-[2rem] ${
            isCookiesVisible ? "pt-40" : "pt-[80px]"
          }  md:px-16 pb-16 gap-[50px]`}
        >
          <HeroSection />
          <Cards />
          <Section />
          <Testimonial />
        </div>
        <div className="w-full">
          <Sponsor />
          <Partners />
        </div>
        <div className="bg-white flex flex-col mx-auto max-w-[1180px] mt-[70px]   px-[1rem] pt-[70px] md:px-16 pb-16 gap-[50px]">
          <PricingTable />
          <More />
          <MoneyAppSection />
        </div>
        <hr />
        <div className="bg-white flex flex-col mx-auto max-w-[1180px] mt-[70px] pt-[70px] md:px-16  px-[1rem] pb-16 gap-[50px]">
          <Footer />
        </div>
        <FixedFooter />

        {isCookiesVisible ? (
          <div className="z-50  rounded-lg flex gap-4 items-center justify-between py-2 px-4 max-md:hidden fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[470px] border-[#e3e3e3] border-[1px] bg-white">
            <p className="text-[14px]">
              By using this website you agree to our{" "}
              <span className="underline text-[#40196D]">
                cookie policy.
              </span>
            </p>

            <button
              className="bg-[#eff1fe] text-[#40196D] font-bold text-[13px] rounded-lg px-3 py-2"
              onClick={handleCookiesVisibility}
            >
              Dismiss
            </button>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default App;
