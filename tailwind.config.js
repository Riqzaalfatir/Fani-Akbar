/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // ← ini juga harus ada!
  ],
  theme: {
    extend: {
      fontFamily: {  // ← ini yang kurang
        'arno': ['var(--font-arno-pro)'],
        'arnoCaption': ['var(--font-arno-caption)'],
        'corsiva': ['var(--font-corsiva)'],
        'zapfino': ["var(--font-zapfino)"],
          'noto': ['var(--font-noto-sans)'], // ← tambah ini

      },
    },
  },
  plugins: [],
}