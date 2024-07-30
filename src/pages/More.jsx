import MoreForYou from "../components/MoreForYou";

const More = () => {
  return (
    <section className="mb-20 py-6 max-w-[90%] lg:max-w-[70%] mx-auto">
      <h2 className=" text-[#40196D] leading-[38px] font-[900] text-[28px] md:text-[35px] mb-10 lg:mb-12 text-center w-[90%] mx-auto ">
        More for you
      </h2>
      <MoreForYou />
    </section>
  );
};

export default More;
