/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
    'src/templates/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#C00000',
      secondary: '#F5730A',
      dark: '#1E2D2F',
      light: '#FFFFFF',
      neutral: '#C4BBAF',
    },
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
      lora: ['"Lora", serif'],
    },
    extend: {
      borderRadius: {
        round: '50%',
      },
      backgroundImage: {
        image: "url('../../public/images/layered-peaks-haikei.svg')",
      },
      boxShadow: {
        button:
          '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
      },
    },
  },
  plugins: [],
};
