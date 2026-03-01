import { Info } from './Info/Info'
import { BlockLink } from '../BlockLink/BlockLink'
import style from './contact.module.css'
export const Contact = () => {
    return (
    <div className={style.contact}>
        <h1 className = {style.logo}>Contact Us</h1>
        <div className={style.content}>
            <p className={style.main}>{`"How can we assist you?"`}</p>
            <div className={style.side}>
                <div className={style.links}>
                    <BlockLink verb="BOOK" title="Pro Sound Services" destination="/liveSound"/>
                    <BlockLink verb="RESERVE" title="Backline Rentals" destination="/backlineRentals"/>
                    <BlockLink verb="ASK" title="General Questions" destination="/generalInquiry"/>
                </div>
                <div className={style.physical}>
                    <Info type="locations"/>
                    <Info type="contact"/>
                    <Info type="office"/>
                </div>
            </div>
        </div>
        {/* booking selection */} 
    </div>)
} 