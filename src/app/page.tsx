import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.homeContainer}>
			<Image className={styles.heroImage} src='/header.svg' alt='header' width={600} height={600} />
			<div className={styles.heroRightSideContainer}>
				<h1 className={styles.heroText}>The NY Times Best-Selling Books</h1>
				<h2 className={styles.heroSubtitle}>See what everyone is reading</h2>
				<div className={styles.heroButtonContainer}>
					<Link href='/booklist'>
						<button className={styles.heroButton}>Check it out</button>{' '}
					</Link>
				</div>
			</div>
		</div>
	);
}
