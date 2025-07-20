import * as icon  from 'react-icons/si'

const profile = {
	name: 'Cindee Chen',
	role: 'Software Developer',
	description: 'Student at University of Toronto, majoring in Mathematics and Computer Science. Passionate about frontend development.',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/cindxyc' },
	{ icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/cindxyc/' }
	// { icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const brand = 'XYC'

const experience = [
	// Incoming Experience Section
	{
		position: 'Software Developer Intern',
		company: 'Pratt & Whitney Canada',
		start: 'September 2025',
		end: 'TBD',
		description: 'Upcoming position starting in fall 2025.',
		logo: '/src/assets/p&w_logo.jpeg',
		link: 'https://www.prattwhitney.com/en',
		incoming: true
  	},
	{
		position: 'Frontend Developer',
		company: 'UofTHacks XIII',
		start: 'May 2025',
		end: 'Present',
		description: 'Implement the teaser and home page for Canadian\'s first student run hackathon.',
		logo: '/src/assets/uofthacks_logo.jpeg',
		link: 'https://uofthacks.com/'
	},
	{
		position: 'IBM Z Student Ambassador',
		company: 'IBM Z',
		start: 'February 2024',
		end: 'December 2024',
		description: 'Completed the IBM Zxplore Concepts badge.\nGained mainframe technology knowledge and developed essential leadership competencies.',
		logo: '/src/assets/ibm_logo.jpeg',
		link: 'https://www.ibm.com/products/z/resources/zxplore'
	},
	{
		position: 'Full Stack Developer',
		company: 'Inwit',
		start: 'May 2024',
		end: 'August 2024',
		description: 'Revamped the UI for inwit.app (e-commerce food catering platform). \n Added a client portal with an order management dashboard.',
		logo: '/src/assets/inwit_logo.jpeg',
		link: 'https://www.inwit.app'
	},
	{
		position: 'Software Developer Intern',
		company: 'Cove Neuroscience',
		start: 'February 2024',
		end: 'May 2024',
		description: 'Implemented functions to the pipeline to automatically generate detailed PDF reports from analyzed brain data.',
		logo: '/src/assets/cove_logo.png',
		link: 'https://www.coveneuro.com'
	},
	{
		position: 'Web Developer & Marketing',
		company: 'Woodsworth College @ University of Toronto',
		start: 'May 2022',
		end: 'September 2023',
		description: 'Developed and maintained the Orientation website and archived $20k in gross revenue.',
		logo: '/src/assets/woodsworth_logo.jpeg',
		link: 'https://www.instagram.com/wworientation2025/'
	}
]

const projects = [
	{
		name: 'Two-Pac',
		description: 'A retro-gamified photo album based on Pac-Man game. Users can collect photos as they navigate through the maze.',
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			// { name: 'Pygame' },
		],
		linkProject: 'https://devpost.com/software/tu-pac',
		linkGithub: 'https://github.com/cindxyc/UofTHacksXIProject',
	},
	{
		name: 'Xtreme Mussels',
		description: 'A fitness app with a focus on personalized workout recommendations. Users can pick different workouts and generate routines to achieve their fitness goals.',
		stack: [
			{ icon: icon.SiJava, name: 'Java' },
			{ icon: icon.SiSpring, name: 'Spring Boot' },
		],
		linkProject: '',
		linkGithub: 'https://github.com/cindxyc/Xtreme-Mussels',
	},
	{
		name: 'Jobb!',
		description: 'High-Fidelity Prototype of a job platform, with an emphasis on company background analysis and job matching based on user preferences.',
		stack: [
			{ icon: icon.SiFigma, name: 'Figma' },
		],
		linkProject: 'https://www.figma.com/design/mxWx9QRFrbA4GWE4I9yQrb/318?node-id=0-1&t=848j4Ga9WgDncTZC-1',
		linkGithub: '',
	},
	{
		name: 'Bookit',
		description: 'High-Fidelity Prototype of a booking platform targeted towards small businesses. Influenced by Linktree.',
		stack: [
			{ icon: icon.SiFigma, name: 'Figma' },
		],
		linkProject: 'https://www.figma.com/proto/i6mCdvfnPM0WToX3ZQonwB/Untitled?node-id=1-4&starting-point-node-id=1%3A4m',
		linkGithub: '',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiDeno, name: 'Deno' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
		],
	},
]

const contact = {
	description: 'Shoot me an email if you want to get in touch, or just say hi :)',
	email: 'ccindee.1206@gmail.com'
}

// export { profile, social, projects, stack, contact, brand }

export {
	profile,
	social,
	experience,
	projects,
	// stack,
	contact,
	brand
}