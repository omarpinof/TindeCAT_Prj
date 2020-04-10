import React from 'react';
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext';
import { AboutContextStore } from '../../contexts/AboutContext';


export const Home = () => (
    <div className="home-page">
        <ProfileContextStore>
        <AboutContextStore>
            <Profile />
            <ViewCats />
            <AboutCat />
        </AboutContextStore>        
        </ProfileContextStore>
    </div>
)
