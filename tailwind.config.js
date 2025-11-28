const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const theme = require('./themes/indigo')

module.exports = {
    darkMode: 'class',
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,svelte,vue}'],
    theme: {
        colors: {
            ...colors,
            ...theme,
        },
		fontFamily: {
			sans: ['Fira Code', ...fontFamily.sans],
		},
		extend: {
            screens: {
                'print': {'raw': 'print'},
            }
		}
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
