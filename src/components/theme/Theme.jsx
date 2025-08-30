import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';


const Theme = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <></>
    )
}

export default Theme