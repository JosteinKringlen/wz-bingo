module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        maxWidth: {
            '1/6': '16%',
            '1/5': '20%',
            '1/4': '25%',
            '1/3': '33%',
            '2/5': '40%',
            '1/2': '50%',
            '3/5': '60%',
            '4/6': '66%',
            '3/4': '75%',
            '4/5': '80%',
            '5/6': '83%',
            '1/1': '100%',
        },
        fontSize: {
            'drac-xs': ['0.75rem !important', '1.375'],
            'drac-sm': ['0.875rem !important', '1.375'],
            'drac-md': ['1rem !important', '1.375'],
            'drac-lg': ['1.125rem !important', '1.375'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
