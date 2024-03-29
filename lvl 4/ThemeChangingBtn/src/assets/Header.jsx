import React,{useContext} from "react";
import {ThemeContext} from "./ThemeManager";

export default function Header(props){

     const {color} = useContext(ThemeContext)
   
    
    return (
        <div className={`${color}-theme`}>
            <h1>Theme Context</h1>
            <h3>You are currently using {color} mode</h3>
        </div>
    )
}