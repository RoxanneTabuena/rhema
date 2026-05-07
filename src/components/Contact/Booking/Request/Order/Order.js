import { Times } from './Times/Times'
import { Dates } from '../../../../Rentals/Dates/Dates'
import { ContactSec } from '../../../Contact/ContactSec'
import { Current } from './Current/Current'
import { Checklist } from './Checklist/Checklist'
import { Dropdown } from '../../../inputs/Dropdown'
import { TextBox } from '../../../inputs/TextBox'
import { Submit } from '../../../../Submit/Submit'
import { useState } from 'react'
import { Alert } from '../../../Alert'
import { service_id, template_id, public_key } from "../../../keys"
import emailjs from 'emailjs-com'
import style from './order.module.css'
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'
import { useNavigate } from 'react-router-dom'

export const Order = () => {
    const [ type, setType ] = useState('')
    const [ message, setMessage ] = useState('')
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')
    const [ cartState, cartDispatch ] = useContext(CartContext)
    const { customer, dates } = cartState
    const { name, email, phone, preferred } = customer
    const navigate = useNavigate()

    const contactSec = {
        name: {
            handler: (name) => { cartDispatch({type:'CUSTOMER_NAME', payload:name})},
            value: name
        },
        email: {
            handler: (email) => { cartDispatch({type:'CUSTOMER_EMAIL', payload:email})},
            value: email
        },
        phone: {
            handler: (phone) => { cartDispatch({type:'CUSTOMER_PHONE', payload:phone})},
            value: phone
        },
        preferred: {
            handler: (preferred) => { cartDispatch({type:'CUSTOMER_PREFERRED', payload:preferred})},
            value: preferred
        },
    }

    const inquiries = [
        'Equipment Questions',
        'Press Inquiry',
        'Collaboration',
        'Service Feedback',
        'Other Questions'
    ]

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key)
    .then((result) => {
        setOutcome('success')
        navigate('/thankyou')
    }, (error) => {
        setOutcome('failure')
        setAlertActive(true)
        console.log(error.text);
    });
    }

    const handleClose = () => {
        setAlertActive(false)
    }

    return (
        <form onSubmit={handleSubmit} className={style.order}>
            <input type='hidden' id="title" value="GENERAL"/>
            <Alert active={alertActive} outcome={outcome} handleClose={handleClose}/>
            {/* consent, not a robot */}
            <ContactSec info={contactSec}/>
            <h3>Rental Details</h3>
            <Dates />
            <Checklist />
            <Current/>
            <h3>Send a Message</h3>
            <Dropdown id="type" onChange={setType} options={inquiries} value={type} label={"Topic"}/>
            <p>Message:</p>
            <TextBox id="message" onChange={setMessage} value={message} placeholder={"your message here"}/>
            <Submit />
        </form>
    )
}