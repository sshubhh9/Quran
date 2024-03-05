/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./disc/index.html"],
  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
   
    extend: {
      colors:{
        primary: {
          100: "#182327",
          200:'#FFE9F4',
          300:"#EAFFFC",
          400:"#FFEAEC"
          
        },
        secondary:{
          500:"#DDF6FF",
          600: "#5D696D",
          700:"#33D1FF",
          800:"#FFD36A",
          900:"#F8FFE3",
          1000:"#F8FFE3",
          1100:"#E3FFF3"

          
        }
      },
      fontFamily:{
        inter: ['Inter'],
        oswald:['oswald'],
        Manrope:['Manrope']

      },
      width:{
        90:"370px",
        91:"350px"
      },
      height:{
        90:"340px",
        91:"300px"
      },
      top:{
        76:"300"
      },
      
      
      // backgroundImage: {
      //   'hero':"url('../photo/BG.svg')"

      // }
    },
  },
  plugins: [],
}

// $ npx tailwindcss -i ./src/style.css -o ./disc/output.css --watch