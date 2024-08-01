import Assets from './assets';
import { Images } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

// import loginImage from 'public/static/images/Scribble/Login.png';

export const items: Array<Project> = [
	// {
	// 	slug: 'slick-portfolio-angular',
	// 	color: '#5e95e3',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Unknown,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('angular', 'ts', 'tailwind'),
	// 	type: 'Website Template'
	// },
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// },
	{
		slug: 'scribble',
		color: '#9090ff',
		description:
			'Scribble transforms student collaboration through a cutting-edge web application. This platform brings together React, Express.js, and Node.js to create a seamless environment for project and assignment teamwork.',
		shortDescription:
			'Real-time student collaboration platform with live chat and interactive notebooks. Built with React, Node.js, and AWS.',
		links: [
			{ to: 'https://scribblestudent.com/', label: 'Website' }, 
			{ to: 'https://github.com/loporean/Scribble', label: 'GitHub' }
		],
		logo: Assets.Scribble,
		name: 'Scribble',
		period: {
			from: new Date(2023, 8, 0), to: new Date(2024, 5, 1)
		},
		skills: getSkills('js', 'css', 'reactjs', 'nodejs', 'expressjs'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Login',
				src: Images.ScribLogin
			},
			{
				label: 'Chatroom',
				src: Images.ScribChat
			},
			{
				label: 'Profile',
				src: Images.ScribProfile
			},
			{
				label: 'Classroom Creation',
				src: Images.ScribClass
			},
			{
				label: 'Personal Notes',
				src: Images.ScribPersonal
			},
			{
				label: 'Collaborative Notes',
				src: Images.ScribCollab
			},
			{
				label: 'Chatroom GIFs',
				src: Images.ScribGif
			}
		]
	},
	{
		slug: 'data-analysis-engine',
		color: 'whitesmoke',
		description:
			'The Data Analysis Engine tackles the challenges of big data head-on, providing a robust solution for processing and deriving insights from extensive datasets. This Python-based tool pushes the boundaries of data handling and analysis.',
		shortDescription:
			'High-speed, high-accuracy Python tool for processing and visualizing millions of data points.',
		links: [ 
			{ to: 'https://github.com/loporean/Data_Analysis_Engine', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Data Analysis Engine',
		period: {
			from: new Date(2022, 8, 0), to: new Date(2022, 12, 0)
		},
		skills: getSkills('python'),
		type: 'Data Analysis'
	},
	{
		slug: 'inform-a-fish',
		color: '#B4CFB0',
		description:
			// 'Inform-A-Fish is a comprehensive online platform designed for anglers of all levels, offering a community-centered space tailored to meet the needs of fishing enthusiasts. Whether you’re a seasoned professional or a novice angler, this platform is your go-to resource.',
			'Inform A Fish redefines the online fishing community experience, serving as a comprehensive hub for anglers to connect, share, and learn. This full-stack web platform combines engaging design with powerful backend functionality.',
		shortDescription:
			'Comprehensive web platform connecting anglers and streamlining fishing information.',
		links: [ 
			{ to: 'https://artemis.cs.csub.edu/~sdenney/inform_a_fish/login.php', label: 'Website' },
			{ to: 'https://github.com/loporean/inform-a-fish', label: 'GitHub' }
		],
		logo: Assets.Bass,
		name: 'Inform A Fish',
		period: {
			from: new Date(2022, 1, 0), to: new Date(2022, 6, 0)
		},
		skills: getSkills('php', 'html', 'css', 'js'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Login',
				src: Images.IAFLogin
			},
			{
				label: 'Home Page',
				src: Images.IAFHome
			},
			{
				label: 'Catches',
				src: Images.IAFCatches
			},
			{
				label: 'Weather',
				src: Images.IAFWeather
			},
			{
				label: 'Admin Page',
				src: Images.IAFAdmin
			},
			{
				label: 'User Management',
				src: Images.IAFUserMan
			},
		]
	}
];

export const title = 'Projects';
