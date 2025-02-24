import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExampleComponent from '../../src/components/ExampleComponent';

// Component test example
describe('ExampleComponent', () => {
  test('renders correctly', () => {
    render(<ExampleComponent/>);
    
    expect(screen.getByRole('heading')).toHaveTextContent('Test Component');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});