import React, { createContext, useState, useEffect } from "react";

const initialState = false;

export const AboutContext = createContext(initialState);

export const AboutContextStore = ({children}) => {
    const[aboutPanel, setAboutPanel] = useState(initialState)

    useEffect(() => {
        const showState = window.innerWidth > 768
        setAboutPanel(showState)
    }, [])

    return (
        <AboutContext.Provider value={{aboutPanel, setAboutPanel}}>
            {children}
        </AboutContext.Provider>
    )
}