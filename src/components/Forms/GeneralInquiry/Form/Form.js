import { ContactSec } from '../../../Blocks/inputs/Contact/ContactSec'
import { Dropdown } from '../../../Blocks/inputs/Dropdown'
import { TextBox } from '../../../Blocks/inputs/TextBox'
import { Submit } from '../../../Submit/Submit'
import { useState } from 'react'
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
    }, (error) => {
        setOutcome('failure')
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
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type='hidden' id="title" value="GENERAL"/>
            {/* consent, not a robot */}
            <ContactSec info={contactSec}/>
            <h3>Send a Message</h3>
            <Dropdown id="type" onChange={setType} options={inquiries} value={type} label={"Topic"}/>
            <p>Message:</p>
            <TextBox id="message" onChange={setMessage} value={message} placeholder={"your message here"}/>
            <Submit />
        </form>
    )
}