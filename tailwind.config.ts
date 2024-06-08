import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{vue,ts,tsx}",
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
