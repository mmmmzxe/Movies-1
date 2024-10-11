"use client";

import Cookies from "js-cookie";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Check for auth token and user's name in cookies
    const token = Cookies.get("authToken");
    const name = Cookies.get("userName"); // Assuming userName is stored during login

    setIsLoggedIn(!!token); // Set login status based on token presence
    setUserName(name || null); // Set the user's name if available
  }, []);

  return (
    <div className="text-white justify-center items-center flex lg:flex-row flex-col">
      <details dir="rtl" className="group text-white relative lg:hidden flex flex-col ">
        <summary className="flex items-center justify-between gap-2  font-medium marker:content-none hover:cursor-pointer">
          <span className="flex items-center  rounded-full bg-white px-3 py-3">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 15 15"
              color=" #f263ff"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </summary>
        <article className="">
          <ul className="flex flex-col absolute text-black bg-white gap-4 mt-6 p-7 rounded-lg text-center">
       
            {isLoggedIn ? (
              // Show user's name and Logout button if the user is logged in
              <div className="flex flex-col items-center  p-3">

                <li className="flex mb-2">
                  {userName && <span className="mx-2 text-black"> {userName}</span>}{" "}
                  <User className="text-black" />
                </li>
                <li className="flex">
                
                  <Link href="/logout" className="ml-3 text-black">

                    Logout
                  </Link> 
                   <LogOut className="text-black"/>
               
                </li>
                <li>
                </li>
              </div>
            ) : (
              // Show Login and SignUp buttons if the user is not logged in
              <>
                <li>
                  <Link href="/login" className="text-black">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-black">SignUp</Link>
                </li>
              </>
            )}
          <li>
            <div className="text-black flex lg:hidden lg:flex-row flex-col  lg:space-x-2 space-y-2  items-center">
     
        {/* Search */}
    <div>
    <SearchInput />
    </div>
        {/* Theme */}
 
     
      </div>
            </li>
          </ul>
        
        </article>
      </details>
      <ul className=" absolute hidden lg:flex lg:flex-row lg:justify-around  gap-4 mt-6 p-7 rounded-lg text-center">
       
       {isLoggedIn ? (
         // Show user's name and Logout button if the user is logged in
         <div className="flex flex-row items-center  p-3">

           <li className="flex  mb-2"> <User className="text-whit" />
             {userName && <span className="mx-2 text-white"> {userName}</span>}{" "}
            
           </li>
           <li className=" button2 text-white">
            
             <Link href="/logout" className="ml-3 text-whit ">

               Logout
             </Link> 
            
          
           </li>
           <li>
           </li>
         </div>
       ) : (
         // Show Login and SignUp buttons if the user is not logged in
         <>
           <li className="button2 text-white">
             <Link href="/login" className="">
               Login
             </Link>
           </li>
           <li>
             <Link href="/register" className="text-white">SignUp</Link>
           </li>
         </>
       )}
     <li>
       <div className="text-black flex lg:hidden lg:flex-row flex-col  lg:space-x-2 space-y-2  items-center">

   {/* Search */}
<div>
<SearchInput />
</div>
   {/* Theme */}


 </div>
       </li>
     </ul>
    </div>
  );
};

export default Nav;
