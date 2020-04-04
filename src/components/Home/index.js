import React, { useState, useEffect } from 'react';
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext';


export const Home = () => (
        <div className="home-page">
            <ProfileContextStore>
                <Profile />
                <ViewCats />
                <AboutCat />
            </ProfileContextStore>
        </div>
    )
