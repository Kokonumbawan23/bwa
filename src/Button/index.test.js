import React from 'react'
import { getByText, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from '.'

test('should not allowed click a button if isDisabled is present',()=>{
    const {container} = render(<Button isDisabled></Button>);

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('should render loading/spinner',()=>{
    const {container, getByText} = render(<Button isLoading></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();

});

test('should render <a> tag',()=>{
    const {container} = render(<Button type='link' isExternal></Button>);

    expect(container.querySelector('a')).toBeInTheDocument();
});

test('should render <Link> Component',()=>{
    const {container} = render(<Router><Button type='link' href=""></Button></Router>);

    expect(container.querySelector('a')).toBeInTheDocument();
});