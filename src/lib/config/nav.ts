interface Nav {
	id: string;
	name: string;
	url: string;
	isOnPage: (path: string) => boolean;
}

export const nav: Nav[] = [
	{
		id: 'home',
		name: 'Home',
		url: '/',
		isOnPage: (path: string) => path === '/'
	},
	{
		id: 'about',
		name: 'About',
		url: '/about',
		isOnPage: (path: string) => path === '/about'
	},
	{
		id: 'committees',
		name: 'Committees',
		url: '/committees',
		isOnPage: (path: string) => path === '/committees'
	},
	{
		id: 'resources',
		name: 'MUN Resources',
		url: '/resources',
		isOnPage: (path: string) => path === '/resources'
	}
];
