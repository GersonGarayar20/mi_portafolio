/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:{
					DEFAULT:"#38BDF8",
					focus:"#08A5EB",
					content:"#002A3D"
				},
				secondary:{
					DEFAULT:"#818CF8",
					focus:"#3A4BF4",
					content:"#00074B"
				},
				accent:{
					DEFAULT:"#F471B5",
					focus:"#EF2F92",
					content:"#470025"
				},
				neutral:{
					DEFAULT:"#1E293B",
					focus:"#273449",
					content:"#B5CDF5"
				},
				base:{
					100:"#0F172A",
					200:"#0E1526",
					300:"#0C1322",
					content: "#B4C6EF"
				},
			}
		},
	},
	plugins: [],
}
