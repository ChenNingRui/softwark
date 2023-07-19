import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe("modal testing", () => {
    afterEach(() => jest.clearAllMocks())

    test('renders without crashing', () => {
        const mockClickEvent = jest.fn();
        render(<Modal onClose={mockClickEvent} title="test" />);

        const modal = screen.getByRole("modal");

        expect(modal).toBeInTheDocument();
        expect(screen.getByRole("child")).toBeInTheDocument();
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(screen.getByText("Close")).toBeInTheDocument();
    })

    test("onClose event working", () => {
        const mockClickEvent = jest.fn();
        render(<Modal onClose={mockClickEvent} title="test" />);

        const modal = screen.getByRole("modal");
        fireEvent.click(modal);
        expect(modal).toBeInTheDocument();
        expect(mockClickEvent).toHaveBeenCalledTimes(1);
    })
});
