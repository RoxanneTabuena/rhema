import { NavLink } from 'react-router-dom'
import { Jack } from './Jack/Jack'
import style from './home.module.css'
export const Home = () => {
    return (
    <div>
        <Jack/>
        <header>
            <h1 className = {style.logo} >Rhema Audio</h1>
        </header>
        <main className={style.home}>
            <p className= {style.slogan}>Hawaii's own for</p>
            <div className={style.links}>
                <NavLink to='/liveSound' className={style.mainLink}>
                    <p>Pro Sound Services</p>
                </NavLink>
                <p className={style.slogan}>and</p>
                <NavLink to='/rentals' className={style.mainLink}>
                    <p>Backline Rentals</p>
                </NavLink>
            </div>
            <div className={style.bottom}>
                <NavLink to='/about'>
                    <p className={style.slogan}>Since</p>
                    <p className={style.slogan}>1999</p>
                    <p className={style.title}>learn more</p>
                </NavLink>
                <NavLink className={style.book} to='/booking'>
                    <p>BOOK</p>
                    <p>NOW</p>
                </NavLink>
            </div>
        </main>
    </div>)
}