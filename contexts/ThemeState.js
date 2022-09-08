import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeState(props) {

    const initialValue = {
        "value": "dark"
    }

    const [theme, settheme] = useState(initialValue)

    const setTheme = (data) => {
        settheme({
            "value": data
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState