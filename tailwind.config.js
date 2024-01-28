/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
      fontFamily: {
        body: ['Golos Text']
      }
  },
  plugins: [],
  }


// @font-face {
//   font-family: 'Cera Pro Regular';
//   src: url('CeraPro-Regular.eot');
//   src: url('CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
//   url('CeraPro-Regular.woff') format('woff'),
//   url('CeraPro-Regular.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal;
//   }

//   @layer base {
//     html {
//       font-family: "Proxima Nova", system-ui, sans-serif;
//     }
//   }