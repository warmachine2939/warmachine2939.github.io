
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Shubhankar",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Shubhankar",
	description: "A Computer Engineer creating mobile apps and static websites.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1OXC3oOrXuhUN2a1s3hPdfEfYMTo2i2oJ/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a CSE undergraduate at Birla Institute of Technology set to pass out in 2024.",
		"I am an active part of the tech-culture of my college. I am intrested in Mobile app development using Kotlin, I have also recently started web development",
		"My intrests include Music, Suspense-Thriller novels, Games and PIZZA!!."
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create Android applications using Kotlin.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Natours",
			description: "A Web application that can be used to book and review tours, It includes a secure API as its backend which can be accessed by multiple 3rd party organizations.                                     ",
			icons: [

				{
					icon: faGithub,
					link: "https://github.com/warmachine2939/Chat-App",
				},
			]
		},
		{
			title: "Chat App",
			description: "An application that can be used to chat with other users made using Kotlin and Firebase. It also uses firebase authentication to Login users.                                                       ",
			icons: [

				{
					icon: faGithub,
					link: "https://github.com/warmachine2939/Chat-App",
				},
			]
		},
		{
			title: "Scientific Calculator",
			description: "A Scientific Calculator made using Java that takes an expression as an input and uses a Math parser to provide output. The application also verifies the expression before sending it to the parser.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/warmachine2939/Scientific-Calculator",
				},
			]
		},
		{
			title: "To-Do list",
			description: "A To-Do application made using JAVA and firebase(includes logging in through email and password along with the ability to create update and delete tasks)                                           ",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/warmachine2939/To_do_list",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:shubhankardubey135@gmail.com",
			isPrimary: true,
		},
		{
			title: "Call me",
			link: "tel:+91700-459-1798",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Shubhankar Dubey | Computer Engineer | Kotlin | Web developer",
	description: "I create mobile apps and static websites. I am a CSE undergraduate at Birla Institute of Technology, Mesra",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@ShubhankarDubey",
	description: "Computer Engineer | Kotlin | Web developer",
	cards: [
		{
			title: "My website",
			link: "https://warmachine2939.github.io/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/warmachine2939/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/shubhankar-dubey-464173191/",
		},
	]
}
