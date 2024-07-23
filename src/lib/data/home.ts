import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'SPENCER';

export const lastName = 'DENNEY';

export const description =
	'Computer Science graduate from CSU Bakersfield, Class of 2024. Passionate about web development, data analysis, and software engineering. Experienced in building collaborative web apps and data analysis tools. Seeking opportunities to create innovative tech solutions that make a real impact.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub,  
		link: 'https://github.com/loporean' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/sdenney1/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'sdenney1@csub.edu'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

// export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
export const skills = getSkills('js', 'css', 'html', 'reactjs', 'nodejs', 'cpp', 'php');
