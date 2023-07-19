import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('dropdown testing', () => {
    afterEach(() => jest.clearAllMocks())

    const menuItems = ["1", "2"]

    test('renders without crashing', () => {
        const mockClickEvent = jest.fn();
        render(<Dropdown selected={''}
            menuItems={menuItems}
            onSelect={mockClickEvent} />);

        const dropdown = screen.getByRole("dropdown")

        expect(dropdown).toBeInTheDocument();
        expect(screen.getByRole("selectedBar")).toBeInTheDocument();
    })
});