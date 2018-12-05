import {createStore} from "redux";
import {levels, levelWin} from '../data/levels';
import reducers from '../reducers/index';
import ILevel from "../types/ILevel";

function answerHeight(level: any) {
    return Object.keys(level.style).length * 20;
}

function levelBoard(level: any) {
    const colors = {
        g: 'green',
        r: 'red',
        y: 'yellow'
    };
    return level.board.split('').map((e: any) => colors[e]);
}

export function getLevelData(index: number): ILevel {
    return {
        answerHeight: answerHeight(levels[index]),
        board: levelBoard(levels[index]),
        current: index + 1,
        instructions: levels[index].instructions,
        max: levels.length,
        prependCode: levels[index].before,
        selector: levels[index].selector,
        style: levels[index].style
    };
}

export function winData(): ILevel {
    return {
        answerHeight: answerHeight(levelWin),
        board: levelBoard(levelWin),
        current: levelWin.name,
        instructions: levelWin.instructions,
        max: levels.length,
        prependCode: levelWin.before,
        style: levelWin.style
    };
}

const configureStore = (initialState = {}) => createStore(reducers, initialState);

export default configureStore;
