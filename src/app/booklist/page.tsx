import Link from 'next/link';
import { fetchBooks } from '../../api/bookAPIHelper';
import styles from './booklist.module.css';

export default async function BookList() {
	const books = await fetchBooks();

	return (
		<div className={styles.booklist}>
			{books.map(({ title, author, description, id }) => (
				<article className={styles.bookArticle} key={id}>
					<Link href={`/booklist/${id}`}>
						<h2>{title}</h2>
						<h3>{author}</h3>
						<p>{description}</p>
					</Link>
				</article>
			))}
		</div>
	);
}
