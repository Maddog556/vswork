import React,{useContext} from "react";
import {ThemeContext} from "./ThemeManager";

export default function Button(props){
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className={`${color}-theme`}>Change Theme</button>
    )
}