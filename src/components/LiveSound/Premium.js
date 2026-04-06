import { useState } from 'react'
import style from './livesound.module.css'
export const Premium = () => {
    const [ long, setLong ] = useState(false)
    return (
        <div className={style.premium} onClick={()=>{setLong(!long)}} onHover={()=>{setLong(true)}}>
            <h3>Premium Equipment</h3>
            { long ?
                <p className={style.long}>L'acoustics is the industry leader in premium sound reinforcement technologies. Its the best of the best and can only be experienced through Rhema.</p>
                : <p className={style.short}>L'acoustics is the industry leader in premium sound...</p>
            }
        </div>
    )
}