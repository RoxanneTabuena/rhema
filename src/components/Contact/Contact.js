import style from './contact.module.css'
export const Contact = () => {
    return (
    <div className={style.contact}>
        <h1 className = {style.logo}>Contact Us</h1>
        <div className={style.content}>
            <p className={style.main}>{`"How can we assist you?"`}</p>
        </div>
        {/* office location, contact info, booking selection */}
    </div>)
} 