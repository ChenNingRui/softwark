import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe("button testing", () => {
    afterEach(() => jest.clearAllMocks())

    test('renders without crashing', () => {
        const mockClickEvent = jest.fn();
        render(<Button onClick={mockClickEvent} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(mockClickEvent).toHaveBeenCalledTimes(1);
    })
});
