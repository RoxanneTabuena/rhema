import { Menu } from '../Head/Nav/Menu/Menu'
import style from './foot.module.css'
export const Map = () => {
    return (
        <div className={style.map}>
            <h2>Site Map</h2>
            <Menu expand={true}/>
        </div>
    )
}