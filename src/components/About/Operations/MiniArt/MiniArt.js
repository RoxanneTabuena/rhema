import { LearnMore } from './LearnMore/LearnMore'
import style from './miniArt.module.css'
export const MiniArt = ({ h3, p, to}) => {
    return (
        <div className={style.miniArt}>
            <h3>{h3}</h3>
            <p>{p}</p>
            <LearnMore to={`/${to}`}/>
        </div>
    )
}