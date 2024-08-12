import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    // First unit test case
    it('should render the "Next Todos" heading', () => {
        // Arrange
        render(<Header title="Next Todos" />);

        // Act
        const header = screen.getByRole('heading', {
            name: 'Next Todos',
        });

        // Assert
        expect(header).toBeInTheDocument();
    });
});
