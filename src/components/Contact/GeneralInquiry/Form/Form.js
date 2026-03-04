import { ContactSec } from '../../Contact/ContactSec'
import { Dropdown } from '../../inputs/Dropdown'
import { TextBox } from '../../inputs/TextBox'
import { Submit } from '../../../Submit/Submit'
import { useState } from 'react'
import { Alert } from '../../Alert'
import { service_id, template_id, public_key } from "../../keys"
import emailjs from 'emailjs-com'
import style from './form.module.css'

export const Form = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ preferred, setPreferred ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ type, setType ] = useState('')
    const [ message, setMessage ] = useState('')
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')


    const contactSec = {
        name: {
            handler: setName,
            value: name
        },
        email: {
            handler: setEmail,
            value: email
        },
        phone: {
            handler: setPhone,
            value: phone
        },
        preferred: {
            handler: setPreferred,
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
        setAlertActive(true)
    }, (error) => {
        setOutcome('failure')
        setAlertActive(true)
        console.log(error.text);
    });
    }

    const handleClose = () => {
        if(outcome === 'success')
        {
            setName('')
            setPhone('')
            setEmail('')
            setPreferred('')
        }
        setAlertActive(false)
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type='hidden' id="title" value="GENERAL"/>
            <Alert active={alertActive} outcome={outcome} handleClose={handleClose}/>
            {/* consent, not a robot */}
            <h3>Send a Message</h3>
            <Dropdown id="type" onChange={setType} options={inquiries} value={type} label={"Topic"}/>
            <p>Message:</p>
            <TextBox id="message" onChange={setMessage} value={message} placeholder={"your message here"}/>
            <ContactSec info={contactSec}/>
            <Submit />
        </form>
    )
}