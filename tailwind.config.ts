import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#ffffff",
          300: "#818CF8",
        },
        accent: "#EF5555",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
