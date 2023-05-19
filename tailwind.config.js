module.exports = {
	content: ["./public/index.html", "./src/**/*.{html,js}"],
	theme: {
	  extend: {
		colors: {
			primary: {
			  'purple': 'hsl(259, 100%, 65%)',
			  'light-red': 'hsl(0, 100%, 67%)',
			},
			neutral: {
			  'white': 'hsl(0, 0%, 100%)',
			  'off-white': 'hsl(0, 0%, 94%)',
			  'light-grey': 'hsl(0, 0%, 86%)',
			  'smokey-grey': 'hsl(0, 1%, 44%)',
			  'off-black': 'hsl(0, 0%, 8%)',
			},
		},
		fontFamily: { 
			Poppins: ["Poppins", "sans-serif"],
		},
		backgroundImage: {
			'iconArrow': "url('../../assets/images/icon-arrow.svg')",
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widest: '.25em',
			widestx: '.30em'
		},
	  },
	},
	plugins: [],
  };