import {
  testimonialImage1,
  testimonialImage2,
  testimonialImage3,
  testimonialImage4,
  testimonialImage5,
  testimonialImage6,
} from "../assets";

const testimonials = [
  {
    id: 1,
    text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah",
    image: testimonialImage1,
    name: "Mu'azu Muhammad Kudu",
  },
  {
    id: 2,
    text: "Just joined the best Digital Bank in Nigeria I have no complaints whatsoever since i started using Kuda",
    image: testimonialImage2,
    name: "Tomisinv",
  },
  {
    id: 3,
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek",
    image: testimonialImage3,
    name: "Babajide Duroshola",
  },
  {
    id: 4,
    text: "This is the best banking app! I'm enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I've made kuda my main bank account and I'm gonna refer all my friends!",
    image: testimonialImage4,
    name: "@RealSOK_",
  },
  {
    id: 5,
    text: "I like the fact that kuda Microfinance Bank doesn't only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!",
    image: testimonialImage5,
    name: "Adebambo Oyekan",
  },
  {
    id: 6,
    text: "I highly recommend this app, it does what it says 'The bank of the free'. I have received my kuda card.",
    image: testimonialImage6,
    name: "Ifeanyichukwu Obaji",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex w-[calc(350px*12)] animate-slide">
        {testimonials
          .concat(testimonials)
          .map((testimonial, index) => (
            <div key={index} className="flex-none w-[350px] mx-2">
              <div className="flex flex-col justify-between gap-4 p-5 rounded-lg shadow-xl h-[220px]">
                <p className="text-[14px]">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="ml-4 font-extrabold text-[12px]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
