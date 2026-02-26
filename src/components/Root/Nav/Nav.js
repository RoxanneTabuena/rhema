import style from './nav.module.css'
export const Nav = ({path}) => {
    return (
    <nav>
        <img className={style.icon} src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Menu_Icon.png" alt="menu icon"></img>
    </nav>)
}