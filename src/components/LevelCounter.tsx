import React from 'react';
import {connect} from 'react-redux';
import {changeLevel} from '../actions';
import ILevel from '../types/ILevel';

interface IProps {
    current: number,
    max: number,
    changeLevel: Function,
}

const LevelCounter = (props : IProps) => {
    const isFirstLevel = props.current === 1;
    const isLastLevel = props.current === props.max;

    const handleLevelDecrement = () => props.changeLevel(isFirstLevel ? 1 : props.current - 1);
    const handleLevelIncrement = () => props.changeLevel(isLastLevel ? props.max : props.current + 1);

    return <div className='levelCounter'>
        <span className={`levelCounter__left${isFirstLevel ? ' u-disabled' : ''}`} onClick={handleLevelDecrement}>◀</span>
        <span className='levelCounter__label'>Level {props.current} of {props.max} ▾</span>
        <span className={`levelCounter__right${isLastLevel ? ' u-disabled' : ''}`} onClick={handleLevelIncrement}>▶</span>
    </div>;
};

const mapStateToProps = ({level}: {level: ILevel}) => ({...level});

export default connect(mapStateToProps, {changeLevel})(LevelCounter);
