import style from "./Emty.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

const Empty = ({text}) => {
    return (<div>
            <div className={`${style.empty} center`}>{text}</div>
            <NavLink to='/' className={style.toHome}>
                <i className="material-icons ">keyboard_backspace</i>
                Back to home page
                <i className="material-icons">done</i>
            </NavLink>
        </div>
    )
}
export default Empty