import React, { useContext } from 'react';
import Logo from '../../../../img/Logo_color.svg'
import { TopbarIcon } from './Topbar-icon';
import { ProfileContext } from '../../../../contexts/ProfileContext';
import { AboutContext } from '../../../../contexts/AboutContext';

const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => {
    
    const {profilePanel, setProfilePanel} = useContext(ProfileContext)
    const {aboutPanel, setAboutPanel} = useContext(AboutContext)

    const profilePanelHandler = () => {
        setProfilePanel(!profilePanel)
    }

    const aboutPanelHandler = () => {
        setAboutPanel(!aboutPanel)
    }
    
    return (
    <div className = "topbar">
        {/*profilePanel ? 'mostrar':'ocultar'*/}
        <div className="show-mobile">
            <TopbarIcon onPress={profilePanelHandler} name="menu-sharp" />
        </div>
        <div style={logoStyle}>
            <img width="200" src={Logo} />
        </div>
        <TopbarIcon badge='6' name="notifications" /> 
        <div className="show-mobile">
            <TopbarIcon onPress={aboutPanelHandler} name="filter-sharp" />
        </div>
    </div>
)
    }