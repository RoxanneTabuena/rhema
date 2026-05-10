/**
 * GET A QUOTE FORM COMPONENT
 * - connects to email JS
 * - saves customer info to customer profile
 * - opens alert window on submit error
 * - redirects to thankyou on submit success
 */

import { ContactSec } from '../../../../Blocks/inputs/Contact/ContactSec'
import { Dates } from '../../../../Blocks/inputs/Dates/Dates'
import { Times } from '../../../../Blocks/inputs/Times/Times'
import style from './quote.module.css'
import { service_id, template_id, public_key } from "../../../keys"
import emailjs from 'emailjs-com'
// get cart state
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'


export const Quote = () => {
    // connect form to cart context
    const [ cartState, cartDispatch ] = useContext(CartContext)
    const { event, times, dates } = cartState
    const { size, type, location, multi, info } = event
    const { start, end } = times
    // event actions
    const eventType = (value) => {
        const action = { type: "EVENT_TYPE", payload: value}
        cartDispatch(action)
    }
    const eventSize = ({value}) => {
        const action = { type: "EVENT_SIZE", payload: value}
        cartDispatch(action)
    }
    const eventLocation = ({value}) => {
        const action = { type: "EVENT_LOCATION", payload: value}
        cartDispatch(action)
    }
    const eventMulti = ({value}) => {
        const action = { type: "EVENT_MULTI", payload: value}
        cartDispatch(action)
    }
    const eventInfo = ({value}) => {
        const action = { type: "EVENT_INFO", payload: value}
        cartDispatch(action)
    }
    // date action
    const eventDate = ({value}) => {
        const action = {type: "PICKUP_DATE", payload:value}
        cartDispatch(action)
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key)
    .then((result) => {


    }, (error) => {

        console.log(error.text);
    });
    }

    const eventTypes = [
        'Wedding',
        'Corporate Retreat',
        'Conference',
        'Headline Performer'
    ]

    const sizes = [
        'Under 100',
        '100-250',
        '250-500',
        '500-1000',
        '1000-2500',
        '2500-5000',
        '5000-10,000',
        'Over 10,000'
    ]

    return (
        <form onSubmit={handleSubmit} className={style.quote}>
            <ContactSec />
            <Dates type="live"/>
            <Times type="live"/>
            <button type='submit'>Submit</button>
        </form>
    )
}