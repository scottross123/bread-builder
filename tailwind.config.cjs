/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                "app": "auto 1fr"
            },
            gridTemplateColumns: {
                "app": "minmax(150px, 15%) 1fr"
            },
            colors: {
                "base": "#212121"
            }
        },
    },
    plugins: [],
};
