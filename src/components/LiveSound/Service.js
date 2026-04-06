import { useState } from 'react'
import style from './livesound.module.css'
export const Service = () => {
    const [ long, setLong ] = useState(false)
    return (
        <div className={style.service} onClick={()=>{setLong(!long)}} onHover={()=>{setLong(true)}}>
            <h3>Full Service Sound</h3>
            { long ?
                <p className={style.long}>We provide end-to-end sound solutions for events of any scale. This includes system design, equipment rental, setup, and on-site engineering to ensure clear, balanced audio throughout the venue. We tailor each setup to the specific needs of performers, presenters, and audiences.</p>
                : <p className={style.short}>We provide end-to-end sound solutions for events of any scale...</p>
            }
        </div>
    )
}