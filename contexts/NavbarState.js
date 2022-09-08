import React, { useState } from 'react'
import NavbarContext from './NavbarContext'

function NavbarState(props) {

    const initialValue = {
        "value": "false"
    }

    const [navbar, setnavbar] = useState(initialValue)

    const setNavbar = (data) => {
        setnavbar({
            "value": data
        })
    }

    return (
        <NavbarContext.Provider value={{ navbar, setNavbar }}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarState