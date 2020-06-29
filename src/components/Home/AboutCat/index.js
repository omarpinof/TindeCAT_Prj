import React, { useContext, useState, useEffect } from 'react';
import { Preferences } from './components/Preferences';
import { Interests } from './components/Interests';
import { Matches } from './components/Matches';
import { MsgContext } from '../../../contexts/MsgContext';
import { AboutContext } from '../../../contexts/AboutContext';
import { PreferencesAges } from './components/PreferencesAges';
import { HTTP_CONSTANTS } from '../../../config/http-constants';
import { requestHttp } from '../../../config/http-server';

const showAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}

export const AboutCat = ({ preferences, interest }) => {

    const [ preferencesUpdated, setPreferencesUpdated] = useState(preferences)

    const {aboutPanel} = useContext(AboutContext)

    const prefChangedHandler = (newGender) => {
        console.log('preferencias cambiadas.....', newGender)

        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: newGender
        }))
        

        console.log(preferencesUpdated)

    }

    const prefAgesChangedHandler = (min, max) => {
        console.log('preferencias de edad cambiadas......', min, max)

        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))
    }

    useEffect(() => {
        if (JSON.stringify(preferences) !== JSON.stringify(preferencesUpdated)){
            requestChangePreferences()
        }
    }, [preferencesUpdated])

    const requestChangePreferences = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences:preferencesUpdated
            }
            const response = await requestHttp('put', endpoint, bodyData)
            console.log('')

        } catch (err) {
            console.log('Error:', err)
        }
    }

    return (
        <div style ={aboutPanel ? showAboutPanel: hideAboutPanel} className= "about-cat">
            About cat
            <br></br>
            <Preferences onChange={ prefChangedHandler } gender={ preferences.gender } />
            <PreferencesAges notifyChange={ prefAgesChangedHandler } ageMax={ preferences.ageMax } ageMin={ preferences.ageMin } />
            <Interests interestCat={ interest } />
        </div>
    )
}