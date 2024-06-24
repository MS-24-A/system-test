module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0b1b25',
                secundary: '#00fbe4',
                secundaryLight: '#dbffff',
                nickel: '#707271',
                davysGrey: '#555555',
                antiFlashWhite: '#f2f2f2'
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }   
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '992px',
            // => @media (min-width: 992px) { ... }
            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }
            '2xl': '1600px',
            // => @media (min-width: 1600px) { ... }
        },
        fontFamily: {
            KanitRegular: ['KanitRegular'],
            KanitLight: ['KanitLight'],
            KanitMedium: ['KanitMedium'],
            KanitBold: ['KanitBold']
        }
    },
    plugins: [],
}
