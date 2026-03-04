import { Form } from './Form/Form'
import style from './generalInquiry.module.css'
export const GeneralInquiry = () => {
    return (
    <div className={style.generalInquiry}>
        <h1 className = {style.logo}>Connect</h1>
        <div className={style.content}>
            <p className={style.main}>how can we assist you?</p>
            <Form/>
        </div>
    </div>)
} 