/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            colors: {
                "red": {
                    //https://coolors.co/palette/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08
                    50: "#03071e",
                    100: "#370617",
                    200: "#6a040f",
                    300: "#9d0208",
                    400: "#d00000",
                    500: "#dc2f02",
                    600: "#e85d04",
                    700: "#f48c06",
                    800: "#faa307",
                    900: "#ffba08",
                }
            },
        }
    },
    plugins: [],
}

