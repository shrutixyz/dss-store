module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'className'
  theme: {
    
    extend: {
      zIndex : {
        "-10": "-10",
      },
      height: {
        "1px": "10px",
        "24": "6rem",
        "96":"24rem",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      colors: {
        accent : '#D9B4EF',
        midaccent : '#FFD7B0',
        lightaccent : '#FCE8D4',
        black : '#000000',
        white : '#ffffff'
      },
     
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
