import { teamDir } from './teamDir'
import { Summary } from '../Blocks/Summary/Summary'
import { Engineer } from './Directory/Engineer/Engineer'
import { Standard } from './Directory/Standard/Standard'
import { Pat } from './Directory/Pat/Pat'

import style from './team.module.css'
export const Team = () => {
    const engineers = Object.keys(teamDir).filter((k)=>{
        return teamDir[k].role === 'Audio Engineer'
    })
    const crew = Object.keys(teamDir).filter((k)=>{
        return teamDir[k].role.includes('Crew')
    })
    const admin = Object.keys(teamDir).filter((k)=>{
        return teamDir[k].role.includes('Admin')
    })


    return (
        <div className={style.team}>
            <Summary summary="Meet the people behind the magic"/>
            <div className={style.directory}>
                <div className={style.desk}>
                    <h2>Audio Engineers</h2>
                    <p>summary of what the engineers do copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy </p>
                </div>
                { engineers.map((e)=>{
                    return <Engineer key={e} name={e} shirt={teamDir[e]}/>
                })}
            </div>
            <div className={style.directory}>
                <div className={style.title}>
                    <h2>Event Crew</h2>
                    <p>summary for da crew copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy </p>
                </div>
                <div className={style.scroll}>
                    { crew.map((e)=>{
                        return <Standard key={e} name={e} shirt={teamDir[e]}/>
                    })}
                </div>
            </div>
            <div className={style.directory}>
                <div className={style.title}>
                    <h2>Rhema Admin</h2>
                    <p>summary for da admin copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy </p>
                </div>
                <div className={style.scroll}>
                    { admin.map((e)=>{
                        return <Standard key={e} name={e} shirt={teamDir[e]}/>
                    })}
                </div>
            </div>
            <Pat />
        </div>)
}