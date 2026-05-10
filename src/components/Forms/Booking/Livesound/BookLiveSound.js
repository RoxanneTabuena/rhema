import { Summary } from '../../../Blocks/Summary/Summary'
import { Quote } from './Quote/Quote'
import style from './bookLiveSound.module.css'
export const BookLiveSound = () => {
    return (
    <div className={style.liveSound}>
        <div className={style.content}>
            <Summary summary="request a quote for live sound services"/>
            <Quote />
        </div>
    </div>)
}