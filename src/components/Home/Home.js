import { NavLink } from 'react-router-dom'
import { BlockLink } from '../BlockLink/BlockLink'
import style from './home.module.css'
export const Home = () => {
    return (<div>
        <header>
            <h1 className = {style.logo} >Rhema Audio</h1>
        </header>
        <main>
            <div className={style.links}>
                <BlockLink verb="DISCOVER" title="Pro Sound Services" destination="/liveSound"/>
                <BlockLink verb="EXPLORE" title="Backline Rentals" destination="/backlineRentals"/>
            </div>
            <h2 className={style.hook}>"Hawaii's No. 1 in Professional Sound"</h2>
        </main>
    </div>)
}