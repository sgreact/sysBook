import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign In page as default route', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
