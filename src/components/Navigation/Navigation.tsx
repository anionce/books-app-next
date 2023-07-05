import Link from 'next/link';

type PageRoute = { link: string; label: string };

const routePages: PageRoute[] = [{ link: '/about', label: 'About' }];

export default function Navigation() {
	return (
		<ul>
			{routePages.map(({ link, label }) => (
				<li key={label}>
					<Link href={link}>{label}</Link>
				</li>
			))}
		</ul>
	);
}
