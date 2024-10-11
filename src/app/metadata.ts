// src/app/metadata.ts

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies" as string, // Ensure it's a string
  description: "An application for your favorite movies",
  keywords: "movies, favorite movies, movie app, watch movies, top films, movie reviews, film library",
  icons: {
    icon: ['/favicon.png'], // Favicon path
  },
};
