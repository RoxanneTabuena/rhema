import style from './submit.module.css'
export const Submit = () => {
    return (
        <button type="submit" className={style.absolute}>
            <div className={style.submit}>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/bv_arrow.png" alt="purple arrow"></img>
                <p>SEND</p>
            </div>
        </button>

    )
}