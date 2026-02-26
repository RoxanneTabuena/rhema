import { MiniArt } from './MiniArt/MiniArt'
import style from './operations.module.css'
export const Operations = () => {
    const artInfo = {
        backlineRentals : {
            h3: 'BACKLINE RENTALS',
            p: 'Our staff has the latest, state of the art audio and backline equipment at their disposal.'
        },
        liveSound : {
            h3: 'LIVE SOUND SUPPORT',
            p: 'Our staff has the latest, state of the art audio and backline equipment at their disposal.'
        },
        ourExperts : {
            h3: 'AUDIO EXPERTS',
            p: 'Our staff has the latest, state of the art audio and backline equipment at their disposal.'
        }
    }    
    return (
        <div className={style.operations}>
            {Object.keys(artInfo).map((k)=>{
                let info = artInfo[k]
                return <MiniArt key={k} h3={info.h3} p={info.p} to={k} />
            })}
        </div>
    )
}