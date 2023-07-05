import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'My Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
