import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';

declare global {
    interface Window {
        REDUX_STATE: any;
    }
}

const store = configureStore(window.REDUX_STATE || {});

ReactDOM.hydrate(<Provider store={store}>
        <BrowserRouter>
            <Route path={'/level/:id'} component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
