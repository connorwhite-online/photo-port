import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    test('renders',() => {
        render(<About />);
    });
    //Second Test
    test('matches snapshot Dom node structure', () => {
        //render About
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})