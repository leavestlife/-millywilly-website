/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#5D7262', // Pantone 2251C
                    light: '#7A9180',
                    dark: '#405244',
                    bg: '#F7F5EF', // Warm Cream (Unified Background)
                },
                accent: {
                    cream: '#F2ECD8',
                    gold: '#D4AF37',
                }
            },
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
