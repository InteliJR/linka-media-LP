import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Roxo vibrante exato da imagem
        'linka-purple': '#9272f1', 
        'linka-black': '#08070b',
      },
    },
  },
  plugins: [],
};
export default config;