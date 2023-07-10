interface Resources {
	id: string;
	name: string;
	imageUrl: string;
	url: string;
	description?: string;
}

export const resources: Resources[] = [
	{
		id: 'Foo',
		name: 'Foo test resource',
		imageUrl: '/favicon.png',
		url: '/favicon.png',
		description: 'This is a test resource'
	}
];
