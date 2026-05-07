import style from './thankyou.module.css'
export const Thankyou = () => {
    return (
    <div className={style.thankyou}>
        <img className={style.drums} src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/dw_drums.png" alt="drum set"></img>
        <p>Your message has been recieved. Once processed, our team will contact you via your preferred method ASAP.</p>
        <p>Aloha, and thanks for choosing Rhema!</p>
    </div>)
} 