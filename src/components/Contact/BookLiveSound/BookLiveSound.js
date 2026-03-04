import { Quote } from './Quote/Quote'
import style from './bookLiveSound.module.css'
export const BookLiveSound = () => {
    return (
    <div className={style.liveSound}>
        <h1>Book Live Sound</h1>
        <div className={style.content}>
            <p className={style.main}>request an instant quote</p>
            <Quote />
        </div>
    </div>)
}