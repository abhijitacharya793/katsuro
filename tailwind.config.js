/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      18: "18px",
    },
    extend: {
      colors: {
        "app-yellow": "#E1B168",
        "app-purple": "#212529",
        "app-dark-purple": "#292e36",
        "app-gray": "#555555",
        "app-green": "#A0AEAF",
        "hacker-green": "#00FF00",
        "hacker-blue": "#00FFFF",
        "hacker-purple": "#A500F3",
        "hacker-background": "#1E1E1E",
        "hacker-gray": "#333333",
        "hacker-red": "#FF0000",
        "hacker-dark": "#121212",
      },
      fontFamily: {
        'mono': ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}

