// import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './roller.module.css'

export const Roller = ({ title, text, link, index, total }) => {
    return (
        <div className={style.roller} style={{ "--i": index, "--t": total }}>
            <h3>{title}</h3>
            <div className={style.art}>
                <p>{text}</p>
                {link && <NavLink to={link.path} className={style.link}>{link.text}</NavLink>}
            </div>
        </div>
    )
}
