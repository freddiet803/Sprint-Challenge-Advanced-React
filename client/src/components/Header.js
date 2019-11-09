import React from 'react'

import {useDarkMode} from '../Hooks/useDarkMode.js'


const Header = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }


    return (
        <div className='header'>
    <button onClick={toggleDark}>{darkMode ? 'Turn Off' : 'Turn On'}</button>

        </div>
    )
}

export default Header;