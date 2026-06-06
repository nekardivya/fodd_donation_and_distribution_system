import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the food donation system landing page', () => {
  render(<App />);

  expect(screen.getByText(/food donation & distribution system/i)).toBeInTheDocument();
});
