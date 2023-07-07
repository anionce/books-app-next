export type APIBookResponse = {
	description: string;
	title: string;
	author: string;
	primary_isbn10: string;
};

export type Book = {
	description: string;
	title: string;
	author: string;
	id: string;
};

export type SingleBook = {
	description: string;
	title: string;
	author: string;
	id: string;
	publisher: string;
	book_image: string;
	book_image_width: number;
	book_image_height: number;
};
