/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		extend: {
			height: {
				"header": '50vh',
				"70vh": '70vh',
			},
			colors: {
				"2b": '#2b2b2b',
				"3": '#333',
				"6": '#666',
				"9": '#999',
				"c": '#ccc',
			},
			lineHeight: {
				'14': '3.5rem',
				'20': '5rem',
			},
		},
		screens: {
			// 最小
			'min-sm': '640px',
			'min-md': '768px',
			'min-lg': '1024px',
			'min-xl': '1280px',
			// 最大
			'max-xl': { 'max': '1279px' },
			'max-lg': { 'max': '1023px' },
			'max-md': { 'max': '767px' },
			'max-sm': { 'max': '639px' },
		},

	},
	plugins: [],
}
