import style from './livesound.module.css'
import { NavLink } from 'react-router-dom'
import { Events } from './Events/Events'
import { Service } from './Service'
import { Premium } from './Premium'
import { Crew } from './Crew'
export const Livesound = () => {
    return (
    <div className={style.livesound}>
        <h1 className = {style.logo}>Live Sound</h1>
        <div className={style.content}>
            <p className={style.main}>Hawaii's ONLY l'acoustics premium sound distributor</p>
            <Service />
            <Premium />
            <Crew/>
            <NavLink to="/ourExperts"></NavLink>
            <Events/>
        </div>
    </div>)
} 