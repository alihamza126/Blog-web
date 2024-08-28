"use client"

import { useEffect } from 'react';
import { useState } from 'react';

export const useThemeSwitcher = () => {
    const prefDarkQuery = `(prefers-color-schema:dark)`;
    const storageKey = 'theme';


    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        window.localStorage.setItem(storageKey, theme);
    }

    const getUserPreference = () => {
        const userPref = window.localStorage.getItem(storageKey);

        if (userPref) {
            return userPref
        }
        return window.matchMedia(prefDarkQuery).matches ? "dark" : "light";
    }

    const [mode, setMode] = useState('light');
    useEffect(() => {
        const mediaquery = window.matchMedia(prefDarkQuery);

        const handleChange = () => {
            const newMode = getUserPreference();
            setMode(newMode);
            toggleTheme(newMode);
        };
        handleChange();

        mediaquery.addEventListener('change', handleChange);

        return () => {
            mediaquery.removeEventListener('change', handleChange);
        }
    }, []);

    useEffect(() => {
        toggleTheme(mode);
    }, [mode]);

    return [mode, setMode]
}
