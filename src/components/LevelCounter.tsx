import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {LevelContext} from '../App';
import ILevel from "../types/ILevel";

const LevelCounter = (props: RouteComponentProps) => {

    return <LevelContext.Consumer>{(level: ILevel) => {
        const isFirstLevel = level.current === 1;
        const isLastLevel = level.current === level.max;

        const handleLevelDecrement = () => props.history.push(`/level/${isFirstLevel ? 1 : level.current - 1}`);
        const handleLevelIncrement = () => props.history.push(`/level/${isLastLevel ? level.max : level.current + 1}`);

        return <div className='levelCounter'>
        <span className={`levelCounter__left${isFirstLevel ? ' u-disabled' : ''}`}
              onClick={handleLevelDecrement}>◀</span>
            <span className='levelCounter__label'>Level {level.current} of {level.max} ▾</span>
            <span className={`levelCounter__right${isLastLevel ? ' u-disabled' : ''}`}
                  onClick={handleLevelIncrement}>▶</span>
        </div>
    }}
    </LevelContext.Consumer>;
};

export default withRouter(LevelCounter);
