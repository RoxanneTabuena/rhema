import style from './livesound.module.css'
import { Ticker } from './Ticker/Ticker'
import { NavLink } from 'react-router-dom'
import { Events } from './Events/Events'
import { Service } from './Service'
import { Premium } from './Premium'
import { Crew } from './Crew'
import { Booknow } from './Booknow/Booknow'
export const Livesound = () => {
    return (
    <div className={style.livesound}>
        <h1 className = {style.logo}>Live Sound</h1>
        <div className={style.content}>
            <div className={style.main}>
                <h3>Hawaii's Audio</h3>
                <Ticker/>
            </div>
            <Service />
            <Premium />
            <Crew/>
            <NavLink to="/ourExperts"></NavLink>
            <Booknow/>
        </div>
    </div>)
} 