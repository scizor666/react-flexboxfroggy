import {CHANGE_LEVEL, WIN_GAME} from "./types";
import {UPDATE_ANSWER} from "./types";

export const changeLevel = (level: number) => ({type: CHANGE_LEVEL, payload: {current: level}});

export const updateAnswer = (level: number, userStyle: string) => ({
    payload: {current: level, answer: userStyle},
    type: UPDATE_ANSWER
});

export const winGame = () => ({type: WIN_GAME});
