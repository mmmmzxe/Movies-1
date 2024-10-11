"use client"; // This marks the component as a Client Component

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image";
import i from '../../public/images/Rectangle 39450.png'
// Define the type for the props
interface PricingCardProps {
  id: number;
  plan: string;
  dec: string;
  price: number;
  duration: string;
  features: string[]; // Array of strings
  popular?: boolean;  // Optional prop
}

const PricingCard = ({ id, dec, plan, price, duration, features, popular }: PricingCardProps) => {
  const [userId, setUserId] = useState<number | undefined>(); // Define as number or undefined
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null); // Track which plan is loading
  const router = useRouter();

  useEffect(() => {
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      try {
        setUserId(parseInt(userIdFromCookie));
      } catch (error) {}
    }
  }, []);

  const handlePayment = async (planId: number, amount: number) => {
    if (!userId) {
      toast.error("You must be logged in to make a payment.", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
      });
      router.push("/login"); // Redirect to login if not logged in
      return; // Exit the function if no user is logged in
    }

    setLoadingPlanId(planId); // Set the loading state to the plan being processed
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            amount,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.data && data.data.id) {
          const paymentId = data.data.id; // Extract the payment ID
          window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${paymentId}`;
        } else {
          toast.error("Invalid payment response.", {
            duration: 4000,
            progress: true,
            position: "top-right",
            transition: "bounceIn",
          });
        }
      }
    } catch (error) {
      toast.error("An error occurred while processing your payment.", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
      });
    } finally {
      setLoadingPlanId(null); // Reset loading state after completion
    }
  };

  return (
    <div
      className={`bg-2 text-white relative z-2  text-start p-5 lg:w-full  w-2/3 rounded-lg  hover:border-4 hover:border-pink-800`}
    >
      {popular && (
        <span className="absolute top-[-15px] right-2 bg-red-800 text-white text-sm px-3 py-1 rounded-md">
        25% OFF
        </span>
      )}
      <h3 className="text-xl font-bold mb-4">{plan}</h3>
    <div className="flex gap-2 justify-start items-center">
    <p className="text-3xl font-semibold mb-1">${price}</p>
    <span className=" text-sm">{duration}</span>
  
    </div>
    <span className="text-[12px]">{dec}</span>
      <ul className="mt-6 mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2"><Image alt="a" src={i}></Image></span> {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handlePayment(id, price)} // Make sure `id` is passed correctly here
        disabled={loadingPlanId === id}
        className="button text-white w-full hover:bg-pink-600"
      >
        {loadingPlanId === id ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
};

export default PricingCard;
