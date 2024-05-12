const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|card|image|navbar|divider|ripple).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}

