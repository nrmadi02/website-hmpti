module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				archivo: ["Archivo Black", "sans-serif"],
			},
			backgroundImage: (theme) => ({
				"bg-uniska": "url('/images/bg_img.jpeg')",
				"bg-login": "url('/images/bg-login.svg')",
				"bg-logo": "url('/images/logo.png')",
			}),
			animation: {
				bounce200: "bounce 1s infinite 200ms",
				bounce400: "bounce 1s infinite 400ms",
			},
			height: {
				dashuser: "36rem",
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
