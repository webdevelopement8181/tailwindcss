/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
colors:{
  primary:'#FF6363',
  secondary:{
    100:'#E2E2D5',
    200:'#888883',
  }
},
// backgroundColor: {
//   'custom-bg': '#A9907E', // Add your custom color here
// },
backgroundImage: {
  'nav-image': "url('./img/bg.png')",
  'products-image': "url('./img/iconBack.jpg')",
  'about-background-device-mobile':"url('./img/bean.jpg')",
  'about-background-device-md':"url('./img/new.jpg')"

},

    fontFamily:{
      body:['Nunito','Barlow']

    }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
  safelist: [
    'bg-nav-image',
    'bg-products-image'
  ],
}

