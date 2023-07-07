import { fetchSingleBook } from '../../../api/bookAPIHelper';
import { SingleBook } from '../../../models/Books';
import Image from 'next/image';
import styles from './id.module.css';

type BookPageProps = {
	params: {
		id: string;
	};
};

export default async function BookPage({ params: { id } }: BookPageProps) {
	const book: SingleBook = await fetchSingleBook(id);

	return (
		<article className={styles.singleBook}>
			<h1>{book.title}</h1>
			<h2>{book.author}</h2>
			<h3>{book.description}</h3>
			<p>{book.publisher}</p>
			<Image
				src={book.book_image}
				alt='Book cover'
				width={book.book_image_width}
				height={book.book_image_height}
			/>
		</article>
	);
}
