import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobsPage from './src/pages/JobsPage.jsx';

describe('JobsPage', () => { // describe is a function from Vitest; groups tests
  it('renders the main heading', () => {
    // Render the component
    render(<JobsPage />);

    // Find the heading element by its text content
    const heading = screen.getByRole('heading', {
      name: /Jobs & Internships/i,
    });

    // Assert that the heading is in the document
    expect(heading).toBeInTheDocument();
  });
});
