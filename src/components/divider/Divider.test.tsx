import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe("divider testing", () => {
    afterEach(() => jest.clearAllMocks())

    test("renders without crashing", () => {
        render(<Divider />);
        expect(screen.getByRole("divider")).toBeInTheDocument();
    })
});