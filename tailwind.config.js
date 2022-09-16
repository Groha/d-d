const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    content: {
        files: [
            "./components/**/*.{vue,js}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./app.vue",
            "./plagins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}",
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                Exo: ['Exo', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                'blue-btn': '5px 10px 20px rgba(53, 110, 173, 0.2)',
                'small-cube': '5px 5px 15px rgba(0, 0, 0, 0.15)',
                'big-cube': '0px 0px 50px rgba(16, 112, 177, 0.25)',
                card: '5px 20px 50px rgba(16, 112, 177, 0.2)'
            }
        },
        colors: {
            transparent: 'transparent',
            black: 'black',
            white: 'white',
            red: '#6D010C',
            grey: '#737373',
            'light-grey': '#F8F8F8'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
};