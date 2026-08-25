export interface Author {
	name: string;
	username: string;
	avatar: string;
}

export interface Photo {
	id: string;
	title: string;
	description?: string;
	url: string;
	aspectRatio: "portrait" | "landscape" | "square";
	likes: number;
	author: Author;
	tags: string[];
}
