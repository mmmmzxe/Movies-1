import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      plan: 'Basic',
      price: 34.99,
      duration: 'Per hour',
      dec: "Here's a more detailed pricing plan for hourly basis:",
      features: ['Good Quality', '480p', 'Phone/Tablet/Computer', 'Unlimited', 'No Offer'],
    },
    {
      id: 2,
      plan: 'Standard',
      price: 34.99,
      duration: 'Per hour',
      dec: "Here's a more detailed pricing plan for hourly basis:",
      features: ['Good Quality', '480p', 'Phone/Tablet/Computer', 'Unlimited', 'No Offer'],
      popular: true,
    },
    {
      id: 3,
      plan: 'Diamond',
      price: 600.00,
      duration: 'Per project',
      dec: "Here's a more detailed pricing plan for hourly basis:",
      features: ['Better Quality', '480p/720p/1080p', 'Phone/Tablet/Computer', 'Unlimited', '10% Extra Off'],
    },
    {
      id: 4,
      plan: 'Platinum',
      price: 1500.00,
      duration: 'Per month',
      dec: "Here's a more detailed pricing plan for hourly basis:",
      features: ['Best Quality', '480p/720p/1080p/4K', 'Phone/Tablet/Computer', 'Unlimited', '15% Extra Off'],
    
    },
  ];

  return (
    <section className="py-10 max-w-full h-full p-2 my-10">
      <div className="max-w-full relative z-2  px-4 flex flex-col lg:justify-start lg:items-start items-center justify-center lg:px-8 text-start">
        <h2 className="text-4xl font-bold text-white w-full mb-6 lg:w-[65%] text-center lg:text-left">
          Get ready to watch! <span className="sh">CHOOSE THE SUBSCRIPTION</span> that suits your lifestyle.
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 justify-center items-center xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              id={plan.id}
              key={index}
              plan={plan.plan}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              popular={plan.popular}
              dec={plan.dec}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
