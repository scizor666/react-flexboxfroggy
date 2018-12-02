import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import './App.scss';
import SideBar from "./components/SideBar";
import View from "./components/View";
import reducers from './reducers';

const store = createStore(reducers);

class App extends Component {
    public render() {
        return <Provider store={store}>
            <>
                <SideBar/>
                <View/>
            </>
        </Provider>
    }
}

export default App;
