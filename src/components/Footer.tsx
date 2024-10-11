import Image from "next/image";
import Link from "next/link";
import m from '../../public/images/logo.png'
const infoArray = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Press",
    href: "/press",
  },
];

const contactArray = [
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "Gaming",
    href: "/gaming",
  },
  {
    title: "Travel",
    href: "/travel",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Sports",
    href: "/sports",
  },
];

const Information = ({ contact }: { contact?: boolean }) => {
  return (
    <div className="flex flex-col text-gray-300 max-w-full">
      {contact
        ? contactArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#8b8b8b] py-1 flex items-center gap-x-3 group"
            >
              <span className="spa w-2 h-2 rounded-full inline-flex border group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))
        : infoArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#8b8b8b] py-1 flex items-center gap-x-3 group"
            >
              <span className=" spa w-2 h-2 rounded-full inline-flex border group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" px-10 py-20 grid grid-cols-1  lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-100 py-2 mb-5 relative">
          About us{" "}
          <span className=" spa w-16 h-1 inline-block absolute left-0 -bottom-[1.5px] z-10 spa" />
        </h2>
        <Link href={"/"} className="flex m-3">
    
        <Image
          src={m}
          alt="Logo"
          width={50}
          height={50}
          priority={true}
          className="cursor-pointer w-10 h-auto"
        />
          <h1 className="text-[30px] ml-3">Movies</h1>
      </Link>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          Pellentesque suscipit pellentesque luctus. Nulla vel tellus nec risus
          tempus feugiat. Donec nibh orci, sollicitudin sit amet gravida at,
          varius sit amet sem.
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-100 py-2 mb-5 relative">
          Information
          <span className="spa w-16 h-1  inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-100 py-2 mb-5 relative">
          Category
          <span className="spa w-16 h-1 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact={true} />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-100 py-2 mb-5 relative">
          Connect with Us
          <span className="spa w-16 h-1 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-300 text-sm flex flex-col gap-2">
          <p>
            Phone: <span className="text-white font-medium">001 7728 3369</span>
          </p>
          <p>
            Email:{" "}
            <span className="text-white font-medium">
              noor.jsdivs@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
