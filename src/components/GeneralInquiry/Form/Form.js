import { Text } from '../../inputs/Text'
import { Dropdown } from '../../inputs/Dropdown'
import { TextBox } from '../../inputs/TextBox'
import { useState } from 'react'
import style from './form.module.css'
import { Alert } from '../../Alert'
import { service_id, template_id, public_key } from "../../keys"
import emailjs from 'emailjs-com'

export const Form = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ preferred, setPreferred] = useState('')
    const [ info, setInfo ] = useState('')
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')

    const inquiries = [
        'Service Feedback',
        'General Question',
        'Press Request'
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
            setInfo('')
        }
        setAlertActive(false)
    }
    return (
        <form onSubmit={handleSubmit} className={style.quote}>
            <input type='hidden' id="title" />
            <Alert active={alertActive} outcome={outcome} handleClose={handleClose}/>
            {/* consent, not a robot */}
            <h3>Contact</h3>
            <Text id="info" onChange={setInfo} value={info} />
            <button type='submit'>Submit</button>
        </form>
    )
}