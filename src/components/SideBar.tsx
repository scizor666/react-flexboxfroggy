import React from 'react';
import EditorWrapper from "../containers/EditorWrapper";
import ILevel from "../types/ILevel";
import Header from './Header';
import Instructions from './Instructions'

const SideBar = (level: ILevel) => <section className='sidebar'>
    <Header/>
    <Instructions instructions={level.instructions}/>
    <EditorWrapper/>
</section>;

export default SideBar;
