import Box from "../components/Box";
import { body1, body2, body3, body4, body5, body6 } from "../assets";

const Section = () => (
  <section className="flex flex-col gap-32 mb-24 mt-[80px]">
    <Box
      title="Your phone + our app + a debit card = a simpler life."
      description="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
      linkText="Open An Account in Minutes"
      linkHref="#"
      imgSrc={body1}
      imgAlt="kuda home"
    />
    <Box
      title="It's your money, we just help you manage it."
      description="Save it, spend it, send it. It's up to you. Whatever you choose to do with your money, we'll make sure it's done better and free of charge. We take responsibility for that."
      imgSrc={body2}
      imgAlt="kuda home"
      reverse
    />
    <Box
      title="Save money as you spend it, seriously."
      description="You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."
      linkText="See all our Savings"
      linkHref="#"
      imgSrc={body3}
      imgAlt="kuda home"
    />
    <Box
      title="Turn off access, turn on safety."
      description="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try."
      linkText="Learn about our Cards"
      linkHref="#"
      imgSrc={body4}
      imgAlt="kuda home"
      reverse
    />
    <Box
      title="We're always happy to help you."
      description="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy."
      linkText="Get Help"
      linkHref="#"
      imgSrc={body5}
      imgAlt="kuda home"
    />
    <Box
      title="Fees as clear as glass."
      description="We're serious about free banking, and we will never, ever charge you for anything without your consent."
      linkText="See all our Fees"
      linkHref="#"
      imgSrc={body6}
      imgAlt="kuda home"
      reverse
    />
  </section>
);

export default Section;
