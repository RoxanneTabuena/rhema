import style from './livesound.module.css'
import { Ticker } from './Ticker/Ticker'
import { Roller } from './Roller/Roller'
import { liveSoundDir } from '../Arrow/liveSoundCopy'
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
            <div className={style.articles}>
                { Object.keys(liveSoundDir).map((a, i)=>{
                    let entry = liveSoundDir[a]
                    return <Roller 
                                title={entry.title} 
                                key={entry.title} 
                                text={entry.text} 
                                link={entry.link ? entry.link : null} 
                                index={i}
                                total={Object.keys(liveSoundDir).length}                            />
                })}
            </div>
            <Roller/>
            <Booknow/>
        </div>
    </div>)
} 