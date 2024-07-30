/* eslint-disable react/prop-types */
const Card = ({ icon, text }) => {
  return (
    <div className="md:col-span-2 flex p-[22px_25px] md:flex-col items-start gap-[15px] self-stretch rounded-[5px] bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.06)]">
      <img src={icon} alt="" />
      <p className="text-[#40196D] text-[15.6px] font-black leading-[23.4px]">
        {text}
      </p>
    </div>
  );
};

export default Card;
