const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/js/Pages/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};