import React from 'react';
import Header from './Header';
import Instructions from './Instructions'
import Editor from "./Editor";
import {connect} from 'react-redux';

const SideBar = ({instructions, prependCode, answerHeight}) => <section className='sidebar'>
    <Header/>
    <Instructions instructions={instructions}/>
    <Editor prependCode={prependCode} answerHeight={answerHeight}/>
</section>;

const mapStateToProps = ({level: {instructions, prependCode, answerHeight}}) => ({
    instructions,
    prependCode,
    answerHeight
});

export default connect(mapStateToProps)(SideBar);
