"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import i from "../../public/images/tes2.jpg";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type and SwiperRef

function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Suzana",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
    {
      name: "Livia",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
    {
      name: "Katia",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
    {
      name: "Katia",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
    {
      name: "Katia",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
    {
      name: "Katia",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
      image: i,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="py-16 max-w-full flex lg:flex-row flex-col m-5  max-h-full">
      <div className="svg"></div>
      <div className="lg:w-[40%]  relative  w-full lg:m-5 m-0 p-1 flex justify-center text-start items-center">
        <h1 className="text-4xl font-bold text-start mb-8 flex flex-col">
          <span>People is Say </span>
          About Our Support & Services
        </h1>
      </div>
      <Swiper
  breakpoints={{
    652: {
      slidesPerView: 1,
      spaceBetween: 20, // Increased space between slides
    },
    808: {
      slidesPerView: 2,
      spaceBetween: 20, // Increased space for better visibility
    },
    1470: {
      slidesPerView: 3,
      spaceBetween: 30, // Allow more space for larger screens
    },
  }}
  pagination={{ clickable: true }}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  onSlideChange={handleSlideChange}
  className="swiper-container lg:w-full w-full max-h-[250vh]"
  modules={[Pagination, Navigation, Autoplay]}
>

        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="lg:ml-5 ml-0 p-5  ">
            <div className="testimonial-card w-full  lg:w-[18.5vw] text-white bg-1 rounded-2xl shadow-md">
              <div className="bg-2 p-6 border border-none h-[60%] rounded-2xl">
                <ImQuotesLeft className="mx-2 my-5 text-[15px]" />
                <p className="text-[10px] ">{testimonial.quote}</p>
              </div>
              <div className="flex flex-col items-center h-[40%]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mb-3  rounded-full"
                />
                <div className=" text-center">
                  <h3 className="text-lg ">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS to hide swiper-button-next and style swiper-button-prev */}
      <style jsx global>{`
        .swiper-button-next {
          display: none; /* Hide the next button */
        }

        /* Style the previous button */
        .swiper-button-prev {
          color: black !important; /* Color of the arrow */
          font-size: 12px !important; /* Size of the arrow */
          width: 50px;
          font-weight: bolder !important;
          height: 50px;
          position: absolute;
          top: 50%;
          left: 0px; /* Position it inside the swiper, to the left */
          transform: translateX(0) translateY(-50%); /* Center it vertically */
       
          background-color: rgba(
            247,
            246,
            246,
            0.8
          ); /* Semi-transparent background */
          border-radius: 50%; /* Round button */
          /* Adjust distance from the container */
        }

        .swiper-button-prev::after {
          font-size: 25px !important; /* Smaller arrow icon */
          font-weight: bolder !important;
        }
      `}</style>
    </div>
  );
}

export default TestimonialsSlider;
