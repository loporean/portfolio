import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Science',
		description: '',
		location: 'Bakersfield, CA',
		logo: Assets.CSUB,
		name: '',
		organization: 'Calfironia State University, Bakersfield',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 5, 17) },
		shortDescription: '',
		slug: 'CSUB',
		subjects: ['C', 'Algorithms', 'JavaScript', 'Python', 'C++', 'AWS', 'Game Design']
	},
	{
		degree: 'Associate of Science in Computer Science',
		description: '',
		location: 'Bakersfield, CA',
		logo: Assets.BC,
		name: '',
		organization: 'Bakersfield College',
		period: { from: new Date(2019, 8, 1), to: new Date(2021, 12, 0) },
		shortDescription: '',
		slug: 'BC',
		subjects: ['C', 'C++']
	}
	// {
	// 	degree: 'Bachelor degree of Computer Science',
	// 	description: '',
	// 	location: 'Tunisia',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'ISTIC',
	// 	period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item',
	// 	subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	// },
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';
