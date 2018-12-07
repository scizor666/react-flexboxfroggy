import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import LevelContext from '../context/LevelContext';
import ILevel from "../types/ILevel";

const LevelCounter = (props: RouteComponentProps) => {

    return <LevelContext.Consumer>{(level: ILevel) => {
        const currentLevel = level.current === 'win' ? level.max : level.current; // you can make it better
        const isFirstLevel = currentLevel === 1;
        const isLastLevel = currentLevel === level.max;

        const handleLevelDecrement = () => props.history.push(`/level/${isFirstLevel ? 1 : currentLevel - 1}`);
        const handleLevelIncrement = () => props.history.push(`/level/${isLastLevel ? level.max : currentLevel + 1}`);

        return <div className='levelCounter'>
        <span className={`levelCounter__left${isFirstLevel ? ' u-disabled' : ''}`}
              onClick={handleLevelDecrement}>◀</span>
            <span className='levelCounter__label'>Level {currentLevel} of {level.max} ▾</span>
            <span className={`levelCounter__right${isLastLevel ? ' u-disabled' : ''}`}
                  onClick={handleLevelIncrement}>▶</span>
        </div>
    }}
    </LevelContext.Consumer>;
};

export default withRouter(LevelCounter);
