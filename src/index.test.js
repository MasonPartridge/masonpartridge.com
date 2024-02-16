import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './index';

test('renders landing page when path is "/"', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const landingPageElement = screen.getByTestId('landing-page');
  expect(landingPageElement).toBeInTheDocument();
});

test('renders "Hello World" when path is "/help"', () => {
  render(
    <Router initialEntries={['/help']}>
      <App />
    </Router>
  );

  const helloWorldElement = screen.getByText('Hello World');
  expect(helloWorldElement).toBeInTheDocument();
});