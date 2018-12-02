import React from 'react';
import {connect} from 'react-redux';
import IInstructions from '../types/IInstructions';
import ILevel from "../types/ILevel";
import Editor from "./Editor";
import Header from './Header';
import Instructions from './Instructions'

interface IProps {
    answerHeight: string,
    instructions: IInstructions,
    prependCode: string
}

const SideBar = ({answerHeight, instructions, prependCode}: IProps) => <section
    className='sidebar'>
    <Header/>
    <Instructions instructions={instructions}/>
    <Editor prependCode={prependCode} answerHeight={answerHeight}/>
</section>;

const mapStateToProps = ({level: {answerHeight, instructions, prependCode}}: { level: ILevel }) => ({
    answerHeight,
    instructions,
    prependCode
});

export default connect(mapStateToProps)(SideBar);
