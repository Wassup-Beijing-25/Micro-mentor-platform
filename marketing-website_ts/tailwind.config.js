/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        cardBlur: 'rgba(255, 255, 255, 0.8)',
        primaryGreen: '#1a906b',
        primaryColor: '#20B486',
        primaryGray: '#6D737A',
        starColor: '#FFC27A',
      },
      boxShadow: {
        componentcard: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        subcard: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        pupularCard: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        custom: '0px 0px 13px 0px #c5c5c5',
        'header-shadow': '0px 4px 10px rgba(0, 0, 0, 0.25)',
        input: '-4px -4px 44px 0px #00000014',
        'custom-box-shadow': '0px 3px 12px 0px #4B4B4B14',
        feedback: '1px solid #0000001A',
        card: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      },
    },
  },
};
