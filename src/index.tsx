import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './components/Store/store';
import { incrementStore } from './components/Store/store';
ReactDOM.render(
    <Provider store={incrementStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement)

