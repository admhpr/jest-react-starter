import React from 'react';
import App from './App';
import ReactDom from 'react-dom';

test('renders without error', () => {
    const div = document.createElement('div');
    ReactDom.render(<App/>, div);
})