/* eslint-disable react/prop-types */

const SingleFooterLocation = ({ state, address }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#40196D] font-bold text-[14px]">{state}</p>
      <p className="text-[14px] text-[#40196D]">{address}</p>
    </div>
  );
};

export default SingleFooterLocation;
