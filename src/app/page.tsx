import About from "@/components/About";
import CaroselBanner from "@/components/CaroselBanner";
import ChanalHome from "@/components/Chanel";
import Header from "@/components/Header";
import img from "../../public/images/Everything in one Place.png";
import img2 from "../../public/images/4K.png";
import img3 from "../../public/images/channels3.png";
import img4 from "../../public/images/Sport leages.png";
import img5 from "../../public/images/Group 47277.png";
import Table from "@/components/Tabel";
import characterImage from "../../public/images/Skarlet.png";
import characterImage2 from "../../public/images/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients 1.png";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import About2 from "@/components/About2";
import Chanaltv from "@/components/Chaneltv";
import Movie from "@/components/Movie";
import ContactForm from "@/components/feedbake";
import Footer from "@/components/Footer";

import Banner from "@/components/Banner";
import PricingSection from "@/components/PricingSection";
import TestimonialsSlider from "@/components/Testimonials";
import Link from "next/link";
import Movieun from "@/components/Movieun";

export default function Home() {
  return (
    <main>
      <Header />

      <ChanalHome />

      {/* Section 1 */}

      <div className="flex flex-col justify-center max-w-full lg:ml-[100px] lg:mr-[100px] ml-[20px] mr-[20px]">
        <Movie />
      </div>

      {/* Most Popular Channels Section */}
      <div className="flex flex-col   justify-center max-w-full lg:ml-[110px] lg:mr-[110px] ml-[20px] mr-[20px]  my-5">
        <div className="m-5 p-2 flex items-center justify-between border-b border-b-gray-500">
          <h2 className="text-[30px] font-bold tracking-wider">
            Most Popular Channels
          </h2>
          <Link
            href={"/allchannel"}
            className=" text-xs text-white uppercase  py-1 rounded-md font-semibold hover:bg-black duration-300"
          >
            View more
          </Link>
        </div>
        <Chanaltv />
      </div>
     <div className="bg-black p-4"> <div className="flex flex-col    justify-center max-w-full ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px]">
        <About
          span="Everything "
          title="in one place"
          suptitle="Instead of paying for multiple services, get all the best channels, movies, series, and anime in one convenient location. You’ll save time, money, and frustration while ensuring you have access to the latest, most popular entertainment options."
          image={img}
        />
      </div>
</div>
      <div className="flex flex-col   justify-center max-w-full ml-[20px] mr-[20px] lg:ml-[70px] lg:mr-[70px]">
        <Movieun />
      </div>
      <div className="bg-black p-3">
      <div className="flex flex-col   justify-center max-w-full ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px]">
        {/* Anime Universe Section */}

        <About2
          title={<span className="sh">ANIME UNIVERSE</span>}
          suptitle="Watch Apple TV+, Netflix, ESPN, USA Network, Fox News, TBS, and much more from our easy-to-access, easy-to-navigate entertainment hub. You’ll have all of today’s top entertainment options right at your fingertips. It’s never been easier to watch today’s top movies, series, anime, and sporting events!"
          image={img2}
        />

        {/* Sports Events Section */}

        <About
          span="ALL SPORTS EVENTS"
          title=""
          suptitle="Many of our movies, series, and anime are available in vibrant, crystal-clear 4K, allowing you to get the ultimate viewing experience no matter where you are or what you are watching on (TV, computer, laptop, phone, tablet). You are going to love watching in 4K Ultra HD!"
          image={img3}
        />

        <About2
          title={
            <span>
              All Your Favorite Channels <span className="sh">TV PROGRAMS</span>{" "}
              in One Place
            </span>
          }
          suptitle="Watch the best of exciting US and European sports. We offer everything from Premier League football to Major League Baseball to the National Football League and much, Never miss a big game or match again!"
          image={img4}
        />
      </div>
      </div>

      {/* Order Movie Banner */}
      <div className="max-w-full lg:ml-[200px] lg:mr-[200px]  :ml-[20px] mr-[20px]">
        <Banner
          title="Order Your Favorite Movie Now"
          duration="Order Your Favorite Movie Now and enjoy instant access to a wide selection of films. From the latest blockbusters to timeless classics, choose from any genre and start watching right away. Your movie night is just a click away!"
          image={characterImage}
        />
      </div>

   <div className="bg-black">
       {/* Table Section */}
       <div className="max-w-full  justify-center lg:ml-[100px] ml-[20px] mr-[20px] lg:mr-[100px] ">
        <Table />
      </div>
   </div>

      {/* Pricing Section */}
      <div
        className="flex flex-col justify-center items-center ml-[10px] mr-[10px] max-w-full lg:ml-[110px] lg:mr-[110px] "
        id="payment"
      >
        <PricingSection />
      </div>

      {/* 4K Resolution Section */}
    <div className="bg-black">
    <div className="flex flex-col justify-center max-w-full ml-[20px] mr-[20px] lg:ml-[110px] lg:mr-[110px]">
        <About
          span="4K RESOLUTION"
          title="Where Every Pixel Comes to Life"
          suptitle="Dive into a viewing experience that’s truly breathtaking with 4K resolution. Every detail pops, from vibrant colors to stunning textures, making you feel like you’re part of the action."
          image={img5}
        />
      </div>
    </div>

      {/* Contact Banner */}
      <div className="max-w-full lg:ml-[210px] lg:mr-[210px] ml-[20px] mr-[20px]">
        <Banner
          title="Contact With Us"
          duration="Order Your Favorite Movie Now and enjoy instant access to a wide selection of films. From the latest blockbusters to timeless classics, choose from any genre and start watching right away. Your movie night is just a click away!"
          image={characterImage2}
        />
      </div>

      {/* Testimonials Section */}
      <div className="max-w-full lg:ml-[100px] sml-[20px]">
        <TestimonialsSlider />
      </div>

      {/* FAQ Section */}
      <div className="max-w-full lg:ml-[130px] lg:mr-[130px] ml-[20px] mr-[20px]">
        <Faq />
      </div>

   <div className="bg-black p-2">
       {/* Contact Form */}
       <div className="max-w-full lg:ml-[100px] lg:mr-[40px] ml-[20px] mr-[20px] ">
        <ContactForm />
      </div>
   </div>

      <Footer />
    </main>
  );
}
