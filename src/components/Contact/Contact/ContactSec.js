import { Text } from '../inputs/Text'
import style from './contactSec.module.css'

export const ContactSec = ({info}) => {
    const {name, email, phone, preferred} = info

    return (
        <div className={style.contactSec}>
            <h3>Contact Info</h3>
            <Text id="name" onChange={name.handler} value={name.value} required={true}/>
            <p>preferred contact method?</p>
            <div className={style.preferred}>
                <input type="radio" name="preferred" value={preferred.value === "phone"} id="phone" onChange = {()=> preferred.handler("phone")}/>
                <Text id="phone" onChange={phone.handler} value={phone.value} required={preferred.value==="phone"}/>
            </div>
            <div className={style.preferred}>
                <input type="radio" name="preferred" value={preferred.value === "email"} id="email" onClick={()=>{preferred.handler("email")}}/>
                <Text id="email" onChange={email.handler} value={email.value} required={preferred.value==="email"}/>
            </div>
        </div>
    )
}