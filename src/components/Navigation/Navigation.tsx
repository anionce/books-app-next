import Link from 'next/link';
import styles from './Navigation.module.css';
import Image from 'next/image';

type PageRoute = { link: string; label: string };

const routePages: PageRoute[] = [
	{ link: '/', label: 'Home' },
	{ link: '/about', label: 'About' },
	{ link: '/booklist', label: 'List' },
];

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Image src='/logo.svg' alt='logo' width={25} height={25} />
			<div className={styles.navButtons}>
				{routePages.map(({ link, label }) => (
					<div key={label}>
						<Link href={link}>{label}</Link>
					</div>
				))}
			</div>
		</nav>
	);
}
