import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders header title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Welcome to My React App/i);
    expect(titleElement).toBeInTheDocument();
});
