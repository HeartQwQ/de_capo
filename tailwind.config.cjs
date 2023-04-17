/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	// important: true,
	theme: {
		extend: {
			height: {
				"header": '50dvh', // 顶部高度
				"header-bg": '70dvh', // 顶部背景高度
			},
			boxShadow: {
				box: '0 0 3px 0px rgba(0, 0, 0, 0.2)', // 盒子阴影
				"hover-main": '0 0 10px 0px rgba(0, 0, 0, 0.2)' // 主体文章hover下的阴影
			},
			// 网站颜色
			colors: {
				white: '#fff',
				black: '#000',
				main: '#fbfbfb', // 主体背景颜色
				divider: '#d1d5db', // 分割线颜色
				title: '#f43f5e', // 文章标题颜色
				"base-text": '#000', // 基础文字颜色
				secondary: '#9ca3af', // 次要内容颜色
				jump: '#52525b',
				// hover颜色
				hover: {
					text: "#3b82f6" // 文字的hover颜色
				}
			},
			// 渐变颜色
			backgroundImage: {
				"strong-bliss": "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
			}
		},
		// 响应式
		screens: {
			// 最小
			'min-sm': '640px',
			'min-md': '768px',
			'min-lg': '1024px',
			'min-xl': '1280px',
			// 'min-2xl': '1536px',
			// 最大
			// 'max-2xl': { 'max': '1535px' },
			'max-xl': { 'max': '1279px' },
			'max-lg': { 'max': '1023px' },
			'max-md': { 'max': '767px' },
			'max-sm': { 'max': '639px' },
		},
		container: {
			center: true,
		},
	}
}
