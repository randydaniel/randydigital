/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
		colors: {
      'primary': '#FF4D00',
			'grid-lines': 'rgba(255, 77, 0, 0.2)',
      'text-color': '#545454'
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1240px',
				'2xl': '1496px'
			}
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		},
    fontFamily: {
      'display': ['"PPMondwest"', 'sans-serif'],
      'body': ['"Inter"', 'sans-serif']
    }
	},
  plugins: []
};
