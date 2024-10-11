"use client"; // This makes it a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import Loading from "../loading";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = () => {
      try {
        // Remove the authentication token from cookies
        Cookies.remove("authToken");
        Cookies.remove("userName");
        Cookies.remove("userId");
      
        // Show success toast
        toast.success( "Logout Success" , {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          sonido: true,
        });
      } catch (error) {
        // Handle fetch error
        toast.error("Error during logout. Please try again.", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          sonido: true,
        });
      }
    };

    logout();
    router.push("/login");
  }, []);

  return<>

   <Loading/>
  </>;
};

export default LogoutPage;
