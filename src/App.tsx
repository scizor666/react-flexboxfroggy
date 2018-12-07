import React, {Component} from 'react';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {changeLevel, winGame} from './actions';
import './App.scss';
import SideBar from "./components/SideBar";
import ViewWrapper from "./containers/ViewWrapper";
import LevelContext from './context/LevelContext';
import ILevel from "./types/ILevel";

type IProps = RouteComponentProps & { level: ILevel, changeLevel: Function, winGame: Function }

class App extends Component<IProps> {

    public componentWillUpdate(props: IProps) {
        const nextLevel = (props.match.params as any).id;
        if (nextLevel !== props.level.current.toString()) {
            if (nextLevel === 'win') {
                this.props.winGame();
            } else {
                this.props.changeLevel(nextLevel);
            }
        }
    }

    public render() {
        return <LevelContext.Provider value={this.props.level}>
            <SideBar {...this.props.level}/>
            <ViewWrapper/>
        </LevelContext.Provider>
    }
}

const mapStateToProps = ({level}: { level: ILevel }) => ({level});

export default connect(mapStateToProps, {changeLevel, winGame})(App);
