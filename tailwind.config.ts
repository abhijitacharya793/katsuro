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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "app-green": "#00FF00",
        "dark-gray": "#1a1a1a",
        "light-gray": "#d1d5db",
        "dark-blue": "#0A1E2C",
        "neon-purple": "#9b00ff",
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
