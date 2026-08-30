/** REUSABLE CONTACT SECTION FORM 
 * - connects to cart state
 * - for use in all customer-related forms/fields
 */
import style from './contactSec.module.css'
import { CartContext } from '../../../../context/CartContext'
import { useContext } from 'react'
export const ContactSec = () => {
    // connect to cart for customer information
    const [ cartState, cartDispatch] = useContext(CartContext)
    const { customer } = cartState
    const {name, email, phone, preferred} = customer
    // update cart actions
    const setName = ({value}) => {
        const action = { type: "CUSTOMER_NAME", payload:value}
        cartDispatch(action)
    }
    const setEmail = ({value}) => {
        const action = { type: "CUSTOMER_EMAIL", payload:value}
        cartDispatch(action)
    }
    const setPhone = ({value}) => {
        const action = { type: "CUSTOMER_PHONE", payload:value}
        cartDispatch(action)
    }
    const setPreferred = (value) => {
        const action = { type: "CUSTOMER_PREFERRED", payload:value}
        cartDispatch(action)
    }

    return (
        <div className={style.contactSec}>
            <h3>Your Contact</h3>
            
            <label for="name">name:</label>
            <input 
                name="name"
                type="text"
                id={name}
                onChange={(e)=>{setName(e.target)}}
                value={name}
                    >
            </input>
            <p>preferred contact method?</p>
            <div className={style.desk}>
                <div className={style.preferred}>
                    <div>
                        <input 
                            type="radio" 
                            name="preferred" 
                            value={preferred === "phone"} 
                            id="phone" 
                            onClick={()=> setPreferred("phone")}/>
                        <label for="phone">phone:</label>
                    </div>
                    <input 
                        name="phone"
                        type="text"
                        id={phone}
                        onChange={(e)=>{setPhone(e.target)}}
                        value={phone}
                            />
                </div>
                <div className={style.preferred}>
                    <div>
                        <input 
                            type="radio" 
                            name="preferred" 
                            value={preferred === "email"} 
                            id="email" 
                            onClick={()=> setPreferred("email")}/>
                        <label for="email">email:</label>
                    </div>
                    <input 
                        name="email"
                        type="text"
                        id={email}
                        onChange={(e)=>{setEmail(e.target)}}
                        value={email}
                            />
                </div>
            </div>
        </div>
    )
}