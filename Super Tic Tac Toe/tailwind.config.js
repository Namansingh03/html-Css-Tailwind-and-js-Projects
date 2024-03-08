/** @type {import('tailwindcss').Config}; */

module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'maroonX': '#780000',
        'paleYellow': '#ff7d00',
        'light-blue': '#bbd0ff',
        'emerald': '#38040e',
        'ocean': '#036666',
        'light-pink': '#fbf8cc'
      },
      backgroundImage: {
        'background-img': "url('/image/bg-image.jpg')",
        'game-img': "url('/image/game-img.jpg')",
        
      }
    },
  },
  plugins: [],
}

