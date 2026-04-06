import { NavLink } from 'react-router-dom'
import style from './events.module.css'
export const Events = () => {
    return (
    <div className={style.events}>
        <h2>Event Types</h2>
        <p>learn more about your specific event type</p>
        <NavLink to="/headliners"><h3>Headline Preformers</h3></NavLink>
        <NavLink to="/corprate"><h3>Corporate Retreats</h3></NavLink>
        <NavLink to="/weddings"><h3>Weddings</h3></NavLink>
        <NavLink to="/conventions"><h3>Convention Panels</h3></NavLink>
        <NavLink to="/contests"><h3>Contests</h3></NavLink>
        <p>Dont see your event type here? We still got you covered. Reach out to our team with your specifics and we will customize an experience to your needs. </p>
    </div>)
} 