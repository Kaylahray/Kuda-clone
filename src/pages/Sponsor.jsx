import { tc, forum, fintech, bbc, euromoney, cnbc } from "../assets";

const Sponsor = () => {
  return (
    <div className="flex max-w-[1500px] px-[60px] pt-[86.4px] pb-0 justify-between items-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {/* LOGO 1 */}
            <li>
              <img src={tc} alt="one" />
            </li>

            {/* LOGO 2 */}
            <li>
              <img src={forum} alt="two" />
            </li>

            {/* LOGO 3 */}
            <li>
              <img src={fintech} alt="three" />
            </li>

            {/* LOGO 4 */}
            <li>
              <img src={bbc} alt="four" />
            </li>
            <li>
              <img src={cnbc} alt="five" />
            </li>
            <li>
              <img src={euromoney} alt="five" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
