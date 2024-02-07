module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'parallax': `url('/src/imgs/cosmic-trash.jpeg')`,
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'transparent': 'transparent',
        'black': '#000000',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
