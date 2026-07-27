const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                rawaq: {
                    navy: '#1B2A41',
                    'navy-dark': '#12203A',
                    gold: '#C9A227',
                    'gold-light': '#E3C766',
                    ivory: '#F7F4EE',
                    charcoal: '#22262B',
                    olive: '#6B7F5E'
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                arabic: ['"IBM Plex Sans Arabic"', 'Tahoma', ...defaultTheme.fontFamily.sans],
                'arabic-display': ['Almarai', '"IBM Plex Sans Arabic"', 'Tahoma', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
