import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "lg":"1300px",
        'md': '678px',
        'xl': '1319px',
        'ms':'1007px',
        
      },
      fontSize: {
        // Adding responsive font sizes for custom 'mida' breakpoint
        base: ['16px', '24px'],
        mida: ['20px', '28px'], // font-size: 20px with line-height: 28px at mida (900px+)
      },
      flex: {
        full: "0 0 100%",
      },
    
      colors: {
        'dark-indigo': '#141314',
        'vibrant-purple': 'rgb(64, 21, 99)',
        'indigo-900': '#F332F1 ',
        'purple-900': '#A234EA',
        'c': '#141314',
        'dark-indig': '#1c1b2a',
        'vibrant-purpl': 'rgb(64, 21, 99)',
        'cc': '#030223',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #1c1b2a, #5a11e7)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
