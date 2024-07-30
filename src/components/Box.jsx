/* eslint-disable react/prop-types */

const Box = ({
  title,
  description,
  linkText,
  linkHref,
  imgSrc,
  imgAlt,
  reverse,
}) => (
  <div
    className={`w-[80%] mx-auto flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-20 lg:items-center`}
  >
    {/* left container */}
    <div className="w-[100%] lg:w-[50%] text-center flex flex-col gap-3 items-center lg:text-left lg:items-start">
      <h2 className="text-[#40196D] leading-[38px] font-[900] text-[26px] sm:w-[380px] md:w-[250px]">
        {title}
      </h2>
      <p className="text-[14px] max-w-[350px] md:max-w-[320px] text-[#000]">
        {description}
      </p>
      {linkText && (
        <span className="flex justify-center gap-3 underline text-[#40196D] font-bold mt-3">
          <a href={linkHref} className="text-[14px]">
            {linkText}
          </a>
          <img src="/assets/right-arrow.svg" alt="right arrow" />
        </span>
      )}
    </div>

    {/* right container */}
    <div className="w-[100%] lg:w-[50%] sm:w-[70%] mx-auto">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  </div>
);

export default Box;
