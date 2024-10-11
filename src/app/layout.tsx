// src/app/layout.tsx

"use client"; // Keep this for the Client Component

import { Inter } from "next/font/google";
import "./globals.css";

import { useEffect, useState } from "react";
import { metadata } from "./metadata"; // Import the metadata
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const handleLoad = () => {
      clearTimeout(timer);
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <title>{(metadata.title as string) || "Default Title"}</title> {/* Type assertion */}
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={metadata.keywords as string} />
        {/* Add more meta tags if necessary */}
      </head>
      <body className={`${inter.className} bg-gradient-to-r from-c to-dark-indigo`}>
        {loading ? <Loading/> : children} 
  
      </body>
    </html>
  );
}
