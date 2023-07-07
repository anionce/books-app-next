import { GET_BOOKS_ENDPOINT } from '../constants/api';
import { APIBookResponse, Book, SingleBook } from '../models/Books';

export const fetchBooks = async (): Promise<Book[]> => {
	const res = await fetch(GET_BOOKS_ENDPOINT);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const bookList = await res.json();
	const result = bookList.results.books.map((book: APIBookResponse) => {
		return { ...book, id: book.primary_isbn10 };
	});
	return result;
};

export const fetchSingleBook = async (id: string): Promise<SingleBook> => {
	const res = await fetch(GET_BOOKS_ENDPOINT);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const bookList = await res.json();
	const result = bookList.results.books.map((book: APIBookResponse) => {
		return { ...book, id: book.primary_isbn10 };
	});
	return result.filter((book: SingleBook) => book.id === id)[0];
};
