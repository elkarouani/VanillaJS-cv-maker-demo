import domDispatcher from '../../src/classes/dist/Dispatcher.js';

domDispatcher([
	{ name: 'client-name', settings: { innerText: JSON.parse(sessionStorage.getItem('client')).name } },
	{ name: 'client-email', settings: { innerText: JSON.parse(sessionStorage.getItem('client')).email } },
	{ name: 'client-website', settings: { innerText: JSON.parse(sessionStorage.getItem('client')).website } },
	{ name: 'client-phone', settings: { innerText: JSON.parse(sessionStorage.getItem('client')).phone } },
	{ name: 'client-address', settings: { innerText: JSON.parse(sessionStorage.getItem('client')).address } }
]);

JSON.parse(sessionStorage.getItem('client')).experiences.forEach((experience) => {
	domDispatcher([
		{
			name: 'div',
			settings: {
				new: true,
				id: 'experience-item',
				target: 'expiriences',
				classList: [ 'experience' ]
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'experience-item-place',
				target: 'experience-item',
				innerText: experience.place,
				classList: [ 'place' ],
				last_father: true
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'experience-item-date',
				target: 'experience-item',
				innerText: experience.date,
				classList: [ 'date' ],
				last_father: true
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'experience-item-center',
				target: 'experience-item',
				innerText: experience.center,
				classList: [ 'center' ],
				last_father: true
			}
		}
	]);
});

JSON.parse(sessionStorage.getItem('client')).formations.forEach((formation) => {
	domDispatcher([
		{
			name: 'div',
			settings: {
				new: true,
				id: 'formation-item',
				target: 'formations',
				classList: [ 'formation' ]
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'formation-item-type',
				target: 'formation-item',
				innerText: formation.type,
				classList: [ 'type' ],
				last_father: true
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'formation-item-date',
				target: 'formation-item',
				innerText: formation.date,
				classList: [ 'date' ],
				last_father: true
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'formation-item-place',
				target: 'formation-item',
				innerText: formation.place,
				classList: [ 'place' ],
				last_father: true
			}
		}
	]);
});

JSON.parse(sessionStorage.getItem('client')).skills.forEach((skill) => {
	domDispatcher([
		{
			name: 'li',
			settings: {
				new: true,
				id: 'skill-item',
				target: 'skills',
				innerText: skill
			}
		}
	]);
});

JSON.parse(sessionStorage.getItem('client')).hobbies.forEach((hobbie) => {
	domDispatcher([
		{
			name: 'li',
			settings: {
				new: true,
				id: 'hobbie-item',
				target: 'hobbies'
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'hobbie-item-bullet',
				target: 'hobbie-item',
				last_father: true,
				classList: [ 'bullet' ],
				innerText: '•'
			}
		},
		{
			name: 'span',
			settings: {
				new: true,
				id: 'hobbie-item-title',
				target: 'hobbie-item',
				last_father: true,
				classList: [ 'title' ],
				innerText: hobbie
			}
		}
	]);
});
