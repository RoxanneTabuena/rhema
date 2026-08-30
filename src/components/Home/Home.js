import { NavLink } from 'react-router-dom'
import { Jack } from './Jack/Jack'
import { BlockLink } from '../BlockLink/BlockLink'
import style from './home.module.css'
export const Home = () => {
    return (
    <div>
        <Jack/>
        <header>
            <h1 className = {style.logo} >Rhema Audio</h1>
        </header>
        <main>
            <div className={style.links}>
                <BlockLink verb="DISCOVER" title="Pro Sound Services" destination="/liveSound"/>
                <BlockLink verb="EXPLORE" title="Backline Rentals" destination="/backlineRentals"/>
            </div>
            <h2 className={style.hook}>"Hawaii's own audio pros"</h2>
        </main>
    </div>)
}