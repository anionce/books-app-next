import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	it('renders correctly', () => {
		render(<Home />);

		const text = screen.getByText(/welcome/i);

		expect(text).toBeInTheDocument();
	});
});
