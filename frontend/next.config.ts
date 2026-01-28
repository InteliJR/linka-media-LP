import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#08070b',
        'linka-purple': '#9272f1',
        'linka-card': '#161616',
      },
    },
  },
  plugins: [],
};
export default config;