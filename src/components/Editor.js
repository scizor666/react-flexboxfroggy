import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateAnswer, changeLevel} from '../actions';

const Editor = ({prependCode, answerHeight, updateAnswer, level, changeLevel, answer}) => {

    const renderLineNumbers = () => <div className='editor__lineNumbers'>
        {_.range(1, 11).map(i => <React.Fragment key={i}>{i}<br/></React.Fragment>)}
    </div>;

    const handleOnChange = e => updateAnswer(e.target.value);

    const check = () => {
        let frogs = {};
        let isSolved = true;

        document.querySelectorAll('.frog').forEach(frog => {
            let rect = frog.getBoundingClientRect();
            let key = `${rect.left.toFixed(0)},${rect.top.toFixed(0)}`;
            frogs[key] = frog.dataset.color;
        });

        document.querySelectorAll('.lilypad').forEach(lilypad => {
            let rect = lilypad.getBoundingClientRect();
            let key = `${rect.left.toFixed(0)},${rect.top.toFixed(0)}`;
            let val = lilypad.dataset.color;

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

const mapStateToProps = ({level: {current}, answer}) => ({level: current, answer});

export default connect(mapStateToProps, {updateAnswer, changeLevel})(Editor);
