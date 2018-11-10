import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers';
import './App.scss';
import SideBar from "./components/SideBar";
import View from "./components/View";

const store = createStore(reducers);

class App extends Component {
    render() {
        return <Provider store={store}>
            <>
                <SideBar/>
                <View/>
            </>
        </Provider>
    }
}

export default App;
