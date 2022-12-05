/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				negro: {
					100: "#393E46",
					200: "#222831",
				},
				amarillo: "#FFD369",
				gris: "#EEEEEE",
				marron: "#443737",
			},
		},
	},
	plugins: [],
};
