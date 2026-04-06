import { useState } from 'react'
import style from './livesound.module.css'
export const Crew = () => {
    const [ long, setLong ] = useState(false)
    return (
        <div className={style.crew} onClick={()=>{setLong(!long)}} onHover={()=>{setLong(true)}}>
            <h3>audio expertise</h3>
            { long ? 
                <p className={style.long}>Our team brings technical expertise and hands-on experience to any and all live event environments. Our engineers are skilled in system tuning, signal flow management, and real-time problem solving. That means we can ensure consistent audio quality under any condition. We are customer focused, and ready to collaborate with you to deliver seamless, professional results.</p>
                : <p className={style.short}>Our team brings technical expertise ...</p>
            }
        </div>
    )
}