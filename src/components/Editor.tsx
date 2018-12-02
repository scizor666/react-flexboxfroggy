import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {changeLevel, updateAnswer} from '../actions';
import ILevel from "../types/ILevel";

interface IProps {
    level: number,
    answer: string,
    prependCode: string,
    answerHeight: string,
    changeLevel: Function,
    updateAnswer: Function
}

const Editor = ({prependCode, answerHeight, updateAnswer, level, changeLevel, answer}: IProps) => {

    const renderLineNumbers = () => <div className='editor__lineNumbers'>
        {_.range(1, 11).map(i => <React.Fragment key={i}>{i}<br/></React.Fragment>)}
    </div>;

    const handleOnChange = (e : React.FormEvent<HTMLTextAreaElement>) => updateAnswer(e.currentTarget.value);

    const check = () => {
        const frogs: any = {};
        let isSolved = true;

        (document.querySelectorAll('.frog') as NodeListOf<HTMLElement>).forEach(frog => {
            const rect = frog.getBoundingClientRect();
            const key = `${rect.left.toFixed(0)},${rect.top.toFixed(0)}`;
            frogs[key] = frog.dataset.color;
        });

        (document.querySelectorAll('.lilypad') as NodeListOf<HTMLElement>).forEach(lilypad => {
            const rect = lilypad.getBoundingClientRect();
            const key = `${rect.left.toFixed(0)},${rect.top.toFixed(0)}`;
            const val = lilypad.dataset.color;

            if (!(key in frogs) || frogs[key] !== val) {
                isSolved = false;
            }
        });
        if (isSolved) {
            changeLevel(level + 1);
            updateAnswer('');
        } // handle last level
    };

    return <div className='editor'>
        {renderLineNumbers()}
        <div className='editor__css'>
            <div className='editor__code'>
                <div className='editor__cssPrepend'>{prependCode}</div>
                <textarea className='editor__userCode'
                          autoFocus={true}
                          style={{height: `${answerHeight}px`}}
                          onChange={handleOnChange}
                          value={answer}
                />
                <div>}</div>
            </div>
            <button onClick={check} className='editor__next'>Next</button>
        </div>

    </div>;
};

const mapStateToProps = ({level: {current}, answer}: { level: ILevel, answer: string }) => ({level: current, answer});

export default connect(mapStateToProps, {updateAnswer, changeLevel})(Editor);
