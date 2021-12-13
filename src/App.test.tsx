import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string): string => key }),
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get more info/i);
  expect(linkElement).toBeInTheDocument();
});
