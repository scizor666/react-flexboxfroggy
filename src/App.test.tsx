import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import App from './App';
import reducers from './reducers';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={createStore(reducers)}><BrowserRouter>
        <Route path={'/level/:id'} component={App}/>
    </BrowserRouter></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
