import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import ExampleComponent from '../../components/ExampleComponent';

// Component test example
describe('ExampleComponent', () => {
  test('renders correctly', () => {
    render(<ExampleComponent/>);
    
    expect(screen.getByRole('heading')).toHaveTextContent('Test Component');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});