import React, { useContext } from 'react';
import { Preferences } from './components/Preferences';
import { Interests } from './components/Interests';
import { Matches } from './components/Matches';
import { MsgContext } from '../../../contexts/MsgContext';

const ShowAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}

export const AboutCat = () => {

    const message = useContext(MsgContext)

    

    return (
        <div className= "about-cat">
            About cat
            <br></br>
            {message}
            <Interests />
        </div>
    )
}