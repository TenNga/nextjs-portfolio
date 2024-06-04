import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'mobile': {'max': '460px'},
      // => @media (min-width: 360px) { ... }

      'tablet': {'max': '800px'},
      // => @media (min-width: 640px) { ... }

      'laptop': {'max': '1440px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'max': '1535px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
export default config;
