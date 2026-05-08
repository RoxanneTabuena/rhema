import { useState } from 'react'
import style from './standard.module.css'
export const Standard = ({shirt, name}) => {
    const {role, description, pic} = shirt
    const [toggle, setToggle] = useState(false)
    return (
        <div className={style.standard} onClick={()=>{setToggle(!toggle)}}>
            <div className={style.container}>
                <img src={pic} alt={name} className={toggle && style.hide}></img>
                <p className={!toggle && style.hide}>{description}</p>
            </div>                
            <div>
                <h3>{name}</h3>
                <h4>{role}</h4>
            </div>
        </div>
    )
}