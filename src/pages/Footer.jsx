import SingleFooterItem from "../components/SingleFooterItem";
import SingleFooterItemHeader from "../components/SingleFooterItemHeader";
import SingleFooterLocation from "../components/SingleFooterLocation";
import {
  footerKudaLogo,
  appleStore,
  googlePlayStore,
  kudaWebLogo,
  twitter,
  instagram,
  facebook,
  youtube,
  medium,
  linkedin,
} from "../assets";

const Footer = () => {
  return (
    <footer>
      <hr />
      {/* FIRST FOOTER SECTION */}
      <section className="mt-14 mb-16 flex flex-col md:flex-row max-w-[90%] sm:max-w-[94%] md:max-w-[90%] lg:max-w-[80%] mx-auto gap-8 lg:gap-20">
        {/* LOGO */}
        <div>
          <img
            src={footerKudaLogo}
            alt="footer logo"
            className="w-[100px]"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* PERSONAL */}
          <ul className="flex flex-col gap-3 mb-5 lg:mb-0">
            <SingleFooterItemHeader item="Personal" />
            <SingleFooterItem item="Discover Personal" />
            <SingleFooterItem item="Transfer & Spend" />
            <SingleFooterItem item="Save" />
            <SingleFooterItem item="Investments" />
            <SingleFooterItem item="Kuda Card" />
          </ul>
          {/* BUSINESS */}
          <ul className="flex flex-col gap-3 mb-5 lg:mb-0">
            <SingleFooterItemHeader item="Business" />
            <SingleFooterItem item="Discover Business" />
            <SingleFooterItem item="Business Registration" />
            <SingleFooterItem item="softPOS" />
            <SingleFooterItem item="Invoicing" />
            <SingleFooterItem item="Salary Loan" />
            <SingleFooterItem item="Business API" />
            <SingleFooterItem item="Join Kuda Business" />
          </ul>
          {/* COMPANY */}
          <ul className="flex flex-col gap-3">
            <SingleFooterItemHeader item="Company" />
            <SingleFooterItem item="Blog" />
            <SingleFooterItem item="Press" />
            <SingleFooterItem item="Join Our Team" />
            <SingleFooterItem item="About Us" />
          </ul>
          {/* HELP */}
          <ul className="flex flex-col gap-3 mb-5 lg:mb-0">
            <SingleFooterItemHeader item="Help" />
            <SingleFooterItem item="Get Help" />
            <SingleFooterItem item="Scam Awareness" />
            <SingleFooterItem item="FAQs" />
            <SingleFooterItem item="Security" />
            <SingleFooterItem item="Contact Us" />
            <SingleFooterItem item="Self Help" />
          </ul>
          {/* TRANSPARENCY */}
          <ul className="flex flex-col gap-3">
            <SingleFooterItemHeader item="Transparency" />
            <SingleFooterItem item="Terms & Conditions" />
            <SingleFooterItem item="Privacy Policy" />
            <SingleFooterItem item="Information Security Policy" />
            <SingleFooterItem item="Cookie Policy" />
            <SingleFooterItem item="Whistleblowing Policy" />
          </ul>
        </div>
      </section>

      {/* SECOND FOOTER SECTION */}
      <section className="max-w-[90%] sm:max-w-[94%] md:max-w-[90%] lg:max-w-[80%] mb-14 mx-auto ">
        <div className="flex gap-[6px] mb-4 max-[400px]:justify-center">
          <img
            src={appleStore}
            alt="Apple Store"
            className="max-[400px]:w-[110px] max-[400px]:h-[auto]"
          />
          <img
            src={googlePlayStore}
            alt="Google Play Store"
            className="max-[400px]:w-[110px] max-[400px]:h-[auto]"
          />
          <img
            src={kudaWebLogo}
            alt="Kuda Web Logo"
            className="max-[400px]:w-[110px] max-[400px]:h-[auto]"
          />
        </div>
        <p className="text-[#979797] text-[13px] text-center">
          Products may vary by country or market.
        </p>
      </section>

      {/* THIRD FOOTER SECTION */}
      <section className="max-w-[90%] sm:max-w-[94%] md:max-w-[90%] mx-auto flex flex-col gap-8 md:flex-row lg:max-w-[80%] md:gap-20 lg:gap-16 md:justify-center mb-14">
        {/* 1st part */}
        <div className="flex flex-col gap-3">
          <p className="text-[14px] text-[#40196D] font-bold">
            Contact
          </p>
          <p className="text-[14px] text-[#40196D] underline font-bold">
            help@kuda.com
          </p>
          <div className="flex gap-3 lg:gap-4">
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="YouTube" />
            <img src={medium} alt="Medium" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
        {/* 2nd part */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-14">
          <SingleFooterLocation
            state="Lagos"
            address={
              <>
                1-11 Commercial Avenue, Yaba, <br /> Lagos, <br />{" "}
                Nigeria
              </>
            }
          />
          <SingleFooterLocation
            state="London"
            address={
              <>
                5 New Street Square, <br /> London, EC4A 3TW, <br />{" "}
                United Kingdom
              </>
            }
          />
          <SingleFooterLocation
            state="Cape Town"
            address={
              <>
                146 Campground Road, <br /> Snakepit Building, Level
                4, <br /> Newlands, Cape Town
              </>
            }
          />
          <SingleFooterLocation
            state="Canada"
            address={
              <>
                3080 Yonge Street, <br /> Suite 6060, Toronto, <br />{" "}
                Ontario M4N 3N1
              </>
            }
          />
        </div>
      </section>

      {/* FOURTH FOOTER SECTION */}
      <section className="max-w-[90%] sm:max-w-[94%] md:max-w-[89%] lg:max-w-[80%] mx-auto flex flex-col gap-5 mb-32 ">
        <p className="text-[12px] text-[#807f7f]">
          *Kuda Customers get 25 free transfer to other banks every
          month. Extra transfers to other banks cost ₦10 each. <br />{" "}
          **Kuda account holders can deposit money in over 10,000
          branches across Nigeria for free.
        </p>
        <p className="text-[12px] text-[#807f7f]">
          © 2024 Kuda Technologies Ltd (Company No.11472232). All
          rights reserved.
        </p>
        <p className="text-[12px] text-[#807f7f]">
          If you would like to find out more about which Kuda entity
          you receive services from, please reach out to us via the
          in-app chat in the Kuda app. Nigerian banking services
          offered by Kuda Microfinance Bank (RC796975) with registered
          address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria.
          Kuda Microfinance Bank is licensed by the Central Bank of
          Nigeria. Deposits are insured by the Nigerian Deposit
          Insurance Corporation (NDIC).
        </p>
        <p className="text-[12px] text-[#807f7f]">
          UK services are offered by Kuda EMI Ltd (Company No.
          13724208) with registered address at 5 New Street Square,
          London, EC4A 3TW, United Kingdom.
        </p>
        <p className="text-[12px] text-[#807f7f]">
          Canada services will be provided by Kuda Canada Technologies
          Limited, an Ontario corporation registered under number
          1000286176, with its registered address located at 3080
          Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda
          Canada Technologies Limited is duly registered with The
          Financial Transactions and Reports Analysis Centre of Canada
          (FINTRAC) as a money service business, bearing registration
          number M23163015.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
