import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


export default function ContentComponent() {

    const {theme, toogleTheme} = useContext(ThemeContext);

    return (<div>
        Current theme {theme}
        <button onClick={toogleTheme}>Switch</button>
    </div>)
}