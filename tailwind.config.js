/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Blue: "hsl(223, 87%, 63%)",
                c_Pale_Blue: "hsl(223, 100%, 88%)",
                c_Light_Red: "hsl(354, 100%, 66%)",
                c_Gray: "hsl(0, 0%, 59%)",
                c_Very_Dark_Blue: "hsl(209, 33%, 12%)",
            },
            fontFamily: {
                libre_franklin: ["Libre Franklin", "sans-serif"]
            }
        },
    },
    plugins: [],
}

