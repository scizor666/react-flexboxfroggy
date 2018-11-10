import {CHANGE_LEVEL} from "../actions/types";
import {levels} from '../data/levels';

const answerHeight = level => Object.keys(level.style).length * 20;

const colors = {
    r: 'red',
    g: 'green',
    y: 'yellow'
};

const levelBoard = level => level.board.split('').map(e => colors[e]);

export default (state = {
    current: 1,
    max: levels.length,
    instructions: levels[0].instructions,
    prependCode: levels[0].before,
    answerHeight: answerHeight(levels[0]),
    style: levels[0].style,
    board: levelBoard(levels[0]),
    selector: levels[0].selector
}, action) => {
    switch (action.type) {
        case CHANGE_LEVEL:
            let level = levels[action.payload.current - 1];
            return {
                ...state,
                current: action.payload.current,
                instructions: level.instructions,
                prependCode: level.before,
                answerHeight: answerHeight(level),
                style: level.style,
                board: levelBoard(level),
                selector: level.selector
            };
        default:
            return state;
    }
}
