import throttle from 'lodash/throttle';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import {loadState, saveState} from "./store/localStorage";

declare global {
    interface Window {
        REDUX_STATE: any;
    }
}

const persistedState = {...window.REDUX_STATE, ...(loadState() || {})};
const store = configureStore(persistedState || {});

store.subscribe(throttle(() => {
    saveState({
        answers: store.getState().answers
    });
}, 1000));

ReactDOM.hydrate(<Provider store={store}>
        <BrowserRouter>
            <Route path={'/level/:id'} component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
