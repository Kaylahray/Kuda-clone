import Card from "../components/Card";
import { justice, moon, send, save, boxicon } from "../assets";

const cardData = [
  {
    icon: boxicon,
    text: "Order a Kuda Visa card on the app with pickup and delivery options.",
  },
  {
    icon: moon,
    text: "Enjoy cashless payment options online and offline.",
  },
  {
    icon: justice,
    text: "Pay your essential bills and buy gift cards easily.",
  },
  {
    icon: send,
    text: "Get 25 free transfers to Nigerian banks every month.",
    colSpan:
      "md:col-span-3 min-[992px]:col-span-2 min-[992px]:col-start-2",
  },
  {
    icon: save,
    text: "Save money automatically any time you spend.",
    colSpan: "md:col-span-3 min-[992px]:col-span-2",
  },
];

const Cards = () => {
  return (
    <div className="grid px-[40px] lg:px-[130px] mx-auto grid-cols-1 md:grid-cols-6 grid-rows-2 gap-8">
      {cardData.map((card, index) => (
        <div key={index} className={card.colSpan || "md:col-span-2"}>
          <Card icon={card.icon} text={card.text} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
