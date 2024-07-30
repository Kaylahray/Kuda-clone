import {
  moreBusinessForYou1,
  moreBusinessForYou2,
  moreBusinessForYou3,
  rightArrow,
} from "../assets";

const MoreForYou = () => {
  const forYouData = [
    {
      id: 1,
      title: "Kuda Business",
      desc: "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.",
      icon: moreBusinessForYou1,
    },
    {
      id: 2,
      title: "Transfer & Spend",
      desc: "Send money for free to any Nigerian account with 25 free transfers every month.",
      icon: moreBusinessForYou2,
    },
    {
      id: 3,
      title: "Loans",
      desc: "Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments.",
      icon: moreBusinessForYou3,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 lg:gap-[20px] sm:items-center">
      {forYouData.map((data) => {
        const { id, title, desc, icon } = data;
        return (
          <div
            key={id}
            className="p-5 flex flex-col items-start gap-6 shadow-lg rounded-lg sm:w-[480px] md:w-[350px] justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="w-[30px] sm:w-[35px] lg:w-[30px] h-[auto]">
                <img src={icon} alt={title} />
              </div>

              <h3 className="text-[#40196D] leading-[38px] font-[900] text-[20px] lg:text-[25px]">
                {title}
              </h3>

              <p className="text-[14px] lg:text-[16px]">{desc}</p>
            </div>

            <span className="flex justify-center gap-3 underline text-[#40196D] font-bold mt-3">
              <a href="#" className="text-[14px]">
                Learn more
              </a>{" "}
              <img src={rightArrow} alt="right arrow" />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MoreForYou;
