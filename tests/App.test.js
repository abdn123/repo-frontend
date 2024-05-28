import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders main content', () => {
    render(<App />);
    const contentElement = screen.getByText(/This is the main content of the app/i);
    expect(contentElement).toBeInTheDocument();
});
