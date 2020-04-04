import React from 'react'
import { Profile } from './components/Home/Profile'
import { ViewCats } from './components/Home/ViewCats'
import { AboutCat } from './components/Home/AboutCat'
import { Home } from './components/Home'
import { Routers } from './components/Routers'
import { MsgContext } from './contexts/MsgContext'

export const App = () => (
    <MsgContext.Provider value={'Hola a todos!!'}>
        <Routers/>
    </MsgContext.Provider>
)
