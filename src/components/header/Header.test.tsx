import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('header testing', () => {
    afterEach(() => jest.clearAllMocks())

    test('renders without crashing', () => {
        render(<Header title="testTitle" ><div role="button" /></Header>);

        expect(screen.getByRole("header")).toBeInTheDocument();
        expect(screen.getByRole("title")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByText("testTitle")).toBeInTheDocument();
    })
});