import style from './nav.module.css'

export const MenuIcon = ({open, handleMenuToggle}) => {
    const menu = 
        <img src={'https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Menu_Icon.png'} alt="menu icon"></img>
    const close = 
        <img src={'https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Close_Icon.png'} alt="close icon"></img>
    return (
        <div onClick={handleMenuToggle} className={style.icon} >
            {open === true ? close : menu}
        </div>
    )
}