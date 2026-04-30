import { Banner } from '../Blocks/Banner/Banner'
import { Reviews } from './Reviews/Reviews'
import { Operations } from './Operations/Operations'
import { Clients } from './Clients/Clients'
import style from './about.module.css'
export const About = () => {
    const mission = `Your friendly local live audio experts`
    const history = `From our inception in 1999, Rhema Services was based on a desire to give our clients quality, integrity, and reputable professional sound reinforcement services. Whether it is a sales meeting for a Fortune 500 company or a Hawaiian Trio, we respect your business partnership and are dedicated to making your event the most successful. By implementing this philosophy, our core business is driven by our returning customers.`
    return (
    <div className={style.about}>
        <Banner title="Our Shop" summary={mission}/>
        <h2>Operations</h2>
        <Operations />
        <h2>Legacy</h2>
        <p className={style.history}>{history}</p>
        <div className={style.article}>
            <h3>PAST CLIENTS</h3>
            <Clients />
        </div>
        <div className={style.article}>
            <Reviews/>
        </div>
    </div>)
}