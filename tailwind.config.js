/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      fontFamily: {  
        'arno': ['var(--font-arno-pro)'],
        'arnoCaption': ['var(--font-arno-caption)'],
        'corsiva': ['var(--font-corsiva)'],
        'zapfino': ["var(--font-zapfino)"],
          'noto': ['var(--font-noto-sans)'], 

      },
    },
  },
  plugins: [],
}