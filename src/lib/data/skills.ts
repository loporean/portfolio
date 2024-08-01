import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'A versatile scripting language primarily used for creating interactive web applications. In my project Scribble, I used it to develop real-time features like chat rooms, user authentication, and interactive UI elements. Through this experience, I learned how to implement real-time communication, manage user interactions, and create dynamic web content, enhancing my ability to build engaging web applications.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'A stylesheet language used for describing the presentation of documents written in HTML or XML. I\'ve applied CSS in all of my web development projects, including Inform A Fish and Scribble. In these projects, I used CSS to create attractive and intuitive user interfaces, implement responsive designs, and ensure a consistent look and feel across different pages and components. Through my extensive use of CSS, I\'ve become proficient in modern layout techniques like flexbox and grid, mastered the creation of responsive designs, and learned how to efficiently organize and maintain stylesheets in larger projects. This experience has significantly enhanced my ability to create visually appealing and highly functional web designs.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'The standard markup language for creating web pages. I\'ve used HTML extensively in all my web development projects, including Inform A Fish, where it was crucial for structuring content about fish species, habitats, and catch records. In the Scribble project, I worked with JSX, which is similar to HTML but allows for more dynamic content creation within React components. Through these experiences, I\'ve deepened my understanding of semantic markup, proper document structure, and the importance of accessibility in web development, enhancing my ability to create well-organized and user-friendly web interfaces.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'A JavaScript library for building user interfaces, particularly for single-page applications. I used React in the Scribble project to build the frontend, including interactive components like the chat interface. This experience taught me component-based architecture, state management, and how to create efficient, responsive user interfaces, significantly improving my frontend development capabilities.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'A JavaScript runtime that allows JavaScript to run on the server. I employed Node.js for Scribble\'s backend, handling server-side operations and data management. Through this, I learned how to create scalable network applications and work with asynchronous programming in a server environment, broadening my full-stack development skills.',
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'white',
		description: 'A minimal and flexible Node.js web application framework. I used Express.js with Node.js in Scribble to set up routes and create APIs. This experience taught me how to structure a web application backend efficiently and create RESTful APIs, enhancing my ability to develop robust server-side applications.',
		logo: Assets.ExpressJs,
		name: 'Express Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 
			'A high-level, interpreted programming language known for its simplicity and versatility. I applied Python in my Data Analysis Engine to process large CSV files, calculate statistics, filter data, and generate visualizations. This project taught me efficient data processing techniques, how to handle large datasets, and ways to improve processing speed, significantly enhancing my data analysis skills.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: 'A powerful, general-purpose programming language that extends C with object-oriented features. While not featured in my resume projects, I\'ve used C++ extensively in game development with SDL. This experience helped me learn fundamental programming concepts, object-oriented principles, and how to create interactive software, providing a strong foundation for my programming skills.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: 'A low-level programming language known for its efficiency and direct hardware access. Although I haven\'t listed specific projects using C on my resume, I\'m comfortable with the language. Working with C has given me a deeper understanding of computer architecture and low-level programming concepts, which has been invaluable in my development as a programmer.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'lightblue',
		description: 'A server-side scripting language designed for web development. I utilized PHP in the Inform A Fish project for backend development, managing fish data and user contributions. This experience taught me server-side web development, database interactions, and how to handle user-generated content, improving my skills in creating dynamic, data-driven websites.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
