'use client';

import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import {useState, useEffect} from 'react';

const ChangeTheme = () : JSX.Element => {
    
    const [dark,setDark] = useState<boolean>();

    const handleChangeTheme = () => {
        if (document?.querySelector('body')) {
            document.querySelector('body')?.classList.toggle('dark');
            setDark(!dark);
        }
    }

    useEffect(() => {
        if (document !== undefined) {
            if (document?.querySelector('body')) {
                setDark(document.querySelector('body')?.classList.contains('dark'));
            }
        }
    })

    return (
        <button
        onClick={handleChangeTheme}
        className="
        h-[50px]
        aspect-square
        bg-[var(--background)]
        border-2
        border-[var(--border)]
        rounded-3xl
        px-4
        py-6
        font-bold
        flex
        gap-4
        justify-center
        items-center
        ">
            {dark ? <FaMoon color="var(--primary-color)" /> : <MdSunny color="var(--primary-color)"/>}
        </button>)
}
export default ChangeTheme;