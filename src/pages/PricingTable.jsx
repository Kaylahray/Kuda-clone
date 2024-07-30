import { data } from "../data/pricing-table";
import { kuda, minus, plus } from "../assets";
const PricingTable = () => {
  return (
    <div className="overflow-x-auto px-[40px] lg:px-[130px] pt-[38] pb-[77px]">
      <h3 className="text-center mb-[55px] text-[#40196D] text-[35px] font-black leading-[49.68px]">
        Choose the freedom you need.
      </h3>
      <div className="mt-12 relative h-max overflow-auto rounded-[5px] border border-[ rgba(220, 220, 224, 0.50)] bg-white shadow-[15px_30px_40px_0px_rgba(64,25,109,0.07)] flex pt-[40.8px]  pb-[50.8px] py-[0.8px] flex-col items-start flex-[1_0_0] self-stretch">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6 ">{""} </th>
              <th className="py-3 px-6 text-[#40196D] text-[19px] font-black">
                Other Banks
              </th>
              <th className="py-3 px-6">
                <img src={kuda} alt="" />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-black  text-[15.375px] font-bold leading-[24px]">
                  {item.feature}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex">
                    <img src={minus} alt="" className="mr-2" />
                    <span>{item.otherBanks}</span>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex">
                    <img src={plus} alt="" className="mr-2" />
                    <span>{item.kuda}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
