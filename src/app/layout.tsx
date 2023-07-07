import './globals.css';
import { Playfair_Display } from 'next/font/google';
import Navigation from '../components/Navigation/Navigation';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata = {
	title: 'Book App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={playfair.className}>
				<div className='bodyContainer'>
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	);
}
