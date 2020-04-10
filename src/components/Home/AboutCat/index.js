import React, { useContext } from 'react';
import { Preferences } from './components/Preferences';
import { Interests } from './components/Interests';
import { Matches } from './components/Matches';
import { MsgContext } from '../../../contexts/MsgContext';
import { AboutContext } from '../../../contexts/AboutContext';

const showAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}

export const AboutCat = () => {

    const {aboutPanel} = useContext(AboutContext)

    return (
        <div style ={aboutPanel ? showAboutPanel: hideAboutPanel} className= "about-cat">
            About cat
            <br></br>
            <Interests />
        </div>
    )
}