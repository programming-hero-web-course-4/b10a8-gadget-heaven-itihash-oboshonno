import { pageTitle } from "../Utility/customTabNames";

const Faq = () => {
  pageTitle({
    "/faq": "FAQs | Gadget Heaven",
  });
  return (
    <div>
      <div className="bg-primPink py-16 text-white text-center grid gap-6 px-5">
        <h3 className="text-3xl font-bold">
          Frequently Asked Questions (FAQs)
        </h3>
        <p>The most asked questions we get are answered here.</p>
      </div>
      <div className="max-w-7xl grid justify-center gap-6 mx-auto px-5 py-10">
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            What payment methods do you accept?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> We accept all major
            credit and debit cards, including Visa, Mastercard, and American
            Express, as well as PayPal, Apple Pay, and Google Pay. For added
            security, we also offer encrypted payment options through Stripe.
          </p>
        </div>
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            How long does shipping take?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> Standard shipping
            typically takes 3-5 business days within the country. Expedited
            shipping options are available at checkout if you need your gadgets
            sooner. International shipping may take 7-14 business days,
            depending on your location.
          </p>
        </div>
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            Can I track my order?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> Yes! Once your order has
            shipped, we’ll send you an email with a tracking link so you can
            monitor your package’s progress until it arrives.
          </p>
        </div>
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            What is your return policy?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> We accept returns within
            30 days of delivery. Items must be in their original condition with
            all packaging and accessories. Please visit contact us to initiate a
            return and learn more about the process.
          </p>
        </div>
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            How do I apply a promo code?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> You can apply a promo
            code at checkout. Enter the code in the designated field, and your
            discount will be automatically applied.
          </p>
        </div>
        <div className="grid gap-5 bg-white rounded-2xl p-5 md:p-10 shadow-lg">
          <h4 className="text-lg md:text-2xl font-semibold">
            Can I save items for later?
          </h4>
          <p className="text-base md:text-xl">
            <span className="font-semibold">&gt;</span> Absolutely! Use our Wish
            List feature to save products you’re interested in purchasing later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
