// import { useState, useEffect } from 'react'
import { Arrow } from '../../Arrow/Arrow'
import style from './roller.module.css'

export const Roller = ({ title, text, link, index, total }) => {
    return (
        <div className={style.roller} style={{ "--i": index, "--t": total }}>
            <h3>{title}</h3>
            <div className={style.art}>
                <p>{text}</p>
                {link && <Arrow text={link.text} path={link.path} />}
            </div>
        </div>
    )
}
